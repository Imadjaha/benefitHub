import { useState } from "react";

interface CreateBenefitFormProps {
  onSubmit: (benefit: any) => void;
  onClose: () => void;
  initialData?: any;
}

export default function CreateBenefitForm({
  onSubmit,
  onClose,
  initialData,
}: CreateBenefitFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    discount: initialData?.discount || "",
    date: initialData?.date || "",
    discountCode: initialData?.discountCode || "",
    startDate: initialData?.startDate || "",
    endDate: initialData?.endDate || "",
    status: initialData?.status || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const startTimestamp = new Date(formData.startDate).getTime();
  const endTimestamp = new Date(formData.endDate).getTime();
  const currentTimestamp = new Date().getTime();

  if (startTimestamp > endTimestamp) {
    onSubmit({ 
      ...formData, 
      error: "Start date cannot be later than end date" 
    });
    return;
  }

  const status =
    currentTimestamp >= startTimestamp && currentTimestamp <= endTimestamp
      ? "Active"
      : "Inactive";

  onSubmit({
    ...formData,
    status,
  });

  setFormData({
    title: "",
    discount: "",
    date: "",
    discountCode: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  onClose();
};


     return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {initialData ? "Edit Benefit" : "Add New Benefit"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                         text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter benefit title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Discount
              </label>
              <input
                type="text"
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                         text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-colors duration-200"
                placeholder="e.g., 20% off"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Discount Code
              </label>
              <input
                type="text"
                value={formData.discountCode}
                onChange={(e) => setFormData({ ...formData, discountCode: e.target.value })}
                className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                         text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter discount code"
                required
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Valid Period
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        startDate: e.target.value,
                        date: `${e.target.value} - ${formData.endDate}`,
                      })
                    }
                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        endDate: e.target.value,
                        date: `${formData.startDate} - ${e.target.value}`,
                      })
                    }
                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             transition-colors duration-200"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300
                       bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300
                       transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-white
                       bg-purple-600 hover:bg-purple-700
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition-all duration-200 shadow-lg shadow-purple-500/20"
            >
              Add Benefit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}