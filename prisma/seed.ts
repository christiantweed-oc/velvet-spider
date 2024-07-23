import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const school = await prisma.client.create({
    data: {
      name: 'School',
      slug: 'school',
      email: 'school@example.com',
    },
  });

  await prisma.appConfig.create({
    data: {
      requestPageSize: 25,
      landingPage: '/homework',
      clientId: school.id,
    },
  });

  const assignedStatus = await prisma.status.create({
    data: {
      name: 'Assigned',
      key: 'assigned',
      clientId: school.id,
    },
  });

  const turnedIn = await prisma.status.create({
    data: {
      name: 'Turned In',
      key: 'turned-in',
      clientId: school.id,
    },
  });

  const missing = await prisma.status.create({
    data: {
      name: 'Missing',
      key: 'missing',
      clientId: school.id,
    },
  });

  const grading = await prisma.status.create({
    data: {
      name: 'Grading',
      key: 'grading',
      clientId: school.id,
    },
  });

  const graded = await prisma.status.create({
    data: {
      name: 'Graded',
      key: 'graded',
      clientId: school.id,
    },
  });

  const returned = await prisma.status.create({
    data: {
      name: 'Returned',
      key: 'returned',
      clientId: school.id,
    },
  });

  const withheld = await prisma.status.create({
    data: {
      name: 'Withheld',
      key: 'withheld',
      clientId: school.id,
    },
  });

  const homeworkProcess = await prisma.workflow.create({
    data: {
      name: 'Homework',
      key: 'homework',
      clientId: school.id,
    },
  });

  const gradingProcess = await prisma.workflow.create({
    data: {
      name: 'Grading',
      key: 'grading',
      clientId: school.id,
    },
  });

  const returningProcess = await prisma.workflow.create({
    data: {
      name: 'Returning',
      key: 'returning',
      clientId: school.id,
    },
  });

  await prisma.workFlowStatus.createMany({
    data: [
      { statusId: assignedStatus.id, workflowId: homeworkProcess.id },
      { statusId: turnedIn.id, workflowId: homeworkProcess.id },
      { statusId: missing.id, workflowId: homeworkProcess.id },
      { statusId: grading.id, workflowId: gradingProcess.id },
      { statusId: graded.id, workflowId: gradingProcess.id },
      { statusId: returned.id, workflowId: returningProcess.id },
      { statusId: withheld.id, workflowId: returningProcess.id },
    ],
  });

  const hospital = await prisma.client.create({
    data: {
      name: 'Hospital',
      slug: 'hospital',
      email: 'hospital@example.com',
    },
  });

  await prisma.appConfig.create({
    data: {
      requestPageSize: 25,
      landingPage: '/patient-awaiting-care',
      clientId: hospital.id,
    },
  });

  const patientArrived = await prisma.status.create({
    data: {
      name: 'Patient Arrived',
      key: 'patient-arrived',
      clientId: hospital.id,
    },
  });

  const checkedIn = await prisma.status.create({
    data: {
      name: 'Checked In',
      key: 'checked-in',
      clientId: hospital.id,
    },
  });

  const awaitingCare = await prisma.status.create({
    data: {
      name: 'Awaiting Care',
      key: 'awaiting-care',
      clientId: hospital.id,
    },
  });

  const receivingCare = await prisma.status.create({
    data: {
      name: 'Receiving Care',
      key: 'receiving-care',
      clientId: hospital.id,
    },
  });

  const underWatch = await prisma.status.create({
    data: {
      name: 'Under Watch',
      key: 'under-watch',
      clientId: hospital.id,
    },
  });

  const readyForRelease = await prisma.status.create({
    data: {
      name: 'Ready For Release',
      key: 'ready-for-release',
      clientId: hospital.id,
    },
  });

  const released = await prisma.status.create({
    data: {
      name: 'Released',
      key: 'released',
      clientId: hospital.id,
    },
  });

  const arrivalProcess = await prisma.workflow.create({
    data: {
      name: 'Arrival',
      key: 'arrival',
      clientId: hospital.id,
    },
  });

  const careProcess = await prisma.workflow.create({
    data: {
      name: 'Care',
      key: 'care',
      clientId: hospital.id,
    },
  });

  const releaseProcess = await prisma.workflow.create({
    data: {
      name: 'Release',
      key: 'release',
      clientId: hospital.id,
    },
  });

  await prisma.workFlowStatus.createMany({
    data: [
      { statusId: patientArrived.id, workflowId: arrivalProcess.id },
      { statusId: checkedIn.id, workflowId: arrivalProcess.id },
      { statusId: awaitingCare.id, workflowId: arrivalProcess.id },
      { statusId: awaitingCare.id, workflowId: careProcess.id },
      { statusId: receivingCare.id, workflowId: careProcess.id },
      { statusId: underWatch.id, workflowId: careProcess.id },
      { statusId: underWatch.id, workflowId: releaseProcess.id },
      { statusId: readyForRelease.id, workflowId: releaseProcess.id },
      { statusId: released.id, workflowId: releaseProcess.id },
    ],
  });

  //define a custom nitro plugin to create the grpc server on startup
  //and reroute traffic to the grpc endpoint if there is anything
  //have to solve the port issue though hmmmmmm....
  //maybe define a second server via vite via plugin
  //if possible look into creating a package in analog
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
