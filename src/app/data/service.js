import cardiologyImg from "@/app/public/service/cardiology.jpg";
import neurologyImg from "@/app/public/service/neurology.jpg";
import dentalImg from "@/app/public/service/dental.jpg";
import doctorImg1 from "@/app/public/doctor/doctor1.png";
import doctorImg2 from "@/app/public/doctor/doctor2.png";
import doctorImg3 from "@/app/public/doctor/doctor3.png";

// Doctors Data
export const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    degree: "MBBS, MD",
    designation: "Consultant Cardiologist",
    institution: "XYZ Hospital",
    doctorImg: doctorImg1,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    degree: "MBBS, MD",
    designation: "Consultant Neurologist",
    institution: "ABC Medical Center",
    doctorImg: doctorImg2,
  },
  {
    id: 3,
    name: "Dr. Alice Brown",
    degree: "MBBS, MS (Cardio)",
    designation: "Cardiac Surgeon",
    institution: "XYZ Heart Center",
    doctorImg: doctorImg3,
  },
  {
    id: 4,
    name: "Dr. Robert Green",
    degree: "MBBS, MS (Neuro)",
    designation: "Neuro Surgeon",
    institution: "ABC Neurosciences Institute",
    doctorImg: doctorImg2,
  },
];

// Services Data with Doctor IDs instead of repeated information
export const services = [
  {
    id: 1,
    name: "Consultation",
    path: "consultation",
    parentImg: cardiologyImg,
    description: "Consultation services description",
    doctorIds: [1, 2], // Link to doctor IDs from the doctors array
  },
  {
    id: 2,
    name: "Surgery",
    path: "surgery",
    parentImg: neurologyImg,
    description: "Surgery services description",
    doctorIds: [],
    children: [
      {
        id: 3,
        name: "Cardiac Surgery",
        path: "cardiac",
        childrenImg: cardiologyImg,
        description: "Cardiac surgery details",
        doctorIds: [3], // Link to Cardiac Surgeons
      },
      {
        id: 4,
        name: "Neuro Surgery",
        path: "neuro",
        childrenImg: dentalImg,
        description: "Neuro surgery details",
        doctorIds: [3, 4], // Link to Neuro Surgeons
      },
    ],
  },
];

// Utility to fetch doctors by their IDs
export const getDoctorsByIds = (ids) => {
  return doctors.filter((doctor) => ids.includes(doctor.id));
};

// Example usage to fetch doctors for a particular service
// const consultationDoctors = getDoctorsByIds(services[0].doctorIds); // Fetch doctors for Consultation
