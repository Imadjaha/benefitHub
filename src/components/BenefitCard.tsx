import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface BenefitCardProps {
  initials?: string;
  title: string;
  period?: string;
  discount?: string;
  discountCode?: string;
  status?: string;
}

export default function BenefitCard({
  initials,
  title,
  period,
  discount,
  discountCode,
  status = "Inactive",
}: BenefitCardProps) {
  return (
    <div className="relative flex flex-col shadow-md mx-2 my-6 p-4 rounded-lg  theme-bg ">
      <div className="flex items-center pb-10">
        <Avatar>{initials}</Avatar>
        <div className=" flex-1 px-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm mt-1">{discountCode}</p>
        </div>
        <div className="justify-end">
          <span
            className={`p-2 rounded-md bg-gray-100 ${
              status === "Active" ? "text-green-400" : "text-gray-600"
            }`}
          >
            {status === "Active" && <CheckCircleIcon />}
            {status === "Inactive" && <WatchLaterIcon />}
            <span className="ml-2 font-medium text-gray-600">{status}</span>
          </span>
        </div>
      </div>
      
      <div className="flex justify-start">
        <div>
          <h3 className="text-sm text-gray-600">Zeitraum</h3>
          <span className="text-sm font-semibold">{period}</span>
        </div>
        <div className="h-10 border-l border-gray-200 mx-5"></div>
        <div className="ml-4">
          <h3 className="text-sm text-gray-600">Rabatt</h3>
          <span className="text-sm font-semibold">{discount}</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 cursor-pointer ">
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}
