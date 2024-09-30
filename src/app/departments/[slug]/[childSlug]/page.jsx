import SingleChildService from "@/app/components/HospitalWeb/TemplateOne/Service/SingleChildService";
import { services, getDoctorsByIds } from "@/app/data/service";
import { notFound } from "next/navigation";

export default function ChildServiceDetails({ params }) {
  const { slug, childSlug } = params;
  // Find the parent service first
  const parentService = services.find((service) => service.path === slug);

  if (!parentService || !parentService.children) {
    return notFound(); // If no parent or child found, return a 404
  }

  // Find the child service
  const childService = parentService.children.find(
    (child) => child.path === childSlug
  );

  if (!childService) {
    return notFound(); // If no child service found, return a 404
  }

  const serviceDoctors = getDoctorsByIds(childService.doctorIds);
  return (
    <div>
      {/* <SingleService service={selectedChildService} doctors={serviceDoctors} /> */}
      <SingleChildService
        childService={childService}
        doctors={serviceDoctors}
        parentService={{ name: parentService.name, path: parentService.path }}
      />
    </div>
  );
}
