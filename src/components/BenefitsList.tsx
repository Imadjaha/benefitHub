import { useState } from "react";
import BenefitCard from "./BenefitCard";
import { advantages as initialAdvantages } from "../constants";
import CreateBenefitForm from "./CreateBenefitForm";
import { FaPlus } from "react-icons/fa6";
import Snackbar from "./Snackbar";
import type { Severity } from "./Snackbar";

const getInitials = (title: string) => {
  const words = title.split(" ");
  let initials = "";
  if (words.length > 0) initials += words[0][0].toUpperCase();
  if (words.length > 1) initials += words[1][0].toUpperCase();
  return initials || title.slice(0, 2).toUpperCase();
};
interface Benefit {
  title: string;
  discount: string;
  date: string;
  discountCode: string;
  status: string;
  startDate: string;
  endDate: string;
  initials?: string;
}


export default function BenefitsList() {
  const [advantages, setAdvantages] = useState<Benefit[]>(initialAdvantages);
  const [showForm, setShowForm] = useState(false);
  const [editingBenefit, setEditingBenefit] = useState<Benefit | null>(null);
 const [snackbar, setSnackbar] = useState<{
  show: boolean;
  message: string;
  severity: Severity;
}>({
  show: false,
  message: "",
  severity: "success",
});

  const handleAddBenefit = (newBenefit: Benefit & { error?: string }) => {
    if (newBenefit.error) {
      setSnackbar({
        show: true,
        message: newBenefit.error,
        severity: "error" as Severity,
      });
      return;
    } else {
      // Add new benefit
      setAdvantages([...advantages, { ...newBenefit }]);
      setSnackbar({
        show: true,
        message: "Benefit added successfully",
        severity: "success",
      });
    }

    setShowForm(false);
    setEditingBenefit(null);

    // Auto-hide snackbar after 3 seconds
    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

const normalizeBenefit = (b: Benefit): Benefit => ({
  title: b.title,
  discount: b.discount,
  discountCode: b.discountCode,
  date: b.date || `${b.startDate || ''} - ${b.endDate || ''}`,
  status: b.status || 'Inactive',
  startDate: b.startDate || '',
  endDate: b.endDate || '',
});

const handleEdit = (benefit: Benefit) => {
  setEditingBenefit(normalizeBenefit(benefit));
  setShowForm(true);
};



const handleDelete = (benefit: Benefit) => {
  setAdvantages(advantages.filter((b) => b.title !== benefit.title));
  setSnackbar({
    show: true,
    message: "Benefit deleted successfully",
    severity: "success" as Severity,
  });

  setTimeout(() => {
    setSnackbar((prev) => ({ ...prev, show: false }));
  }, 3000);
};

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingBenefit(null);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer"
        >
          <FaPlus /> Add Benefit
        </button>
      </div>

     {showForm && (
  <CreateBenefitForm
    onSubmit={handleAddBenefit}
    onClose={handleCloseForm}
    initialData={editingBenefit} 
  />
)}

      {advantages.map((advantage) => (
        <BenefitCard
          key={advantage.title}
          initials={advantage.initials || getInitials(advantage.title)}
          title={advantage.title}
          period={advantage.date}
          discount={advantage.discount}
          discountCode={advantage.discountCode}
          status={advantage.status}
          onEdit={() => handleEdit(advantage)}
          onDelete={() => handleDelete(advantage)}
        />
      ))}

      <Snackbar
        show={snackbar.show}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}
