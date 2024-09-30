import SingleService from "@/app/components/HospitalWeb/TemplateOne/Service/SingleService";
import { services, getDoctorsByIds } from "@/app/data/service";
import { notFound } from "next/navigation";

export default function ServiceDetails({ params }) {
  const { slug } = params;

  // Find the selected service or child service dynamically
  let selectedService = services.find((service) => service.path === slug);

  if (!selectedService) {
    services.forEach((service) => {
      if (service.children) {
        const childService = service.children.find(
          (child) => child.path === slug
        );
        if (childService) {
          selectedService = childService;
        }
      }
    });
  }

  if (!selectedService) {
    return notFound(); // If no service found, return a 404
  }
  const serviceDoctors = getDoctorsByIds(selectedService.doctorIds);
  return (
    <div>
      <SingleService service={selectedService} doctors={serviceDoctors} />
    </div>
  );
}
