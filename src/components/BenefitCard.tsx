import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  initials?: string;
  title: string;
  period?: string;
  discount?: string;
  discountCode?: string;
  status?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function BenefitCard({
  initials,
  title,
  period,
  discount,
  discountCode,
  status = "Inactive",
  onEdit,
  onDelete,
}: BenefitCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
    onEdit();
  };

  const handleDelete = () => {
    handleClose();
    onDelete();
  };

 return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                 transform transition-all duration-300 hover:-translate-y-1 mx-2 my-6"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-purple-500" />
      
      <div className="p-6">
        <div className="flex items-center pb-6">
          <Avatar
            sx={{
              bgcolor: 'rgb(147 51 234)',
              width: 56,
              height: 56,
              fontSize: '1.5rem',
            }}
          >
            {initials}
          </Avatar>
          
          <div className="flex-1 px-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
            <div className="flex items-center mt-1 space-x-2">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                {discountCode}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    status === "Active"
                      ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  }`}
              >
                <div className="flex items-center gap-1">
                  {status === "Active" ? <CheckCircleIcon sx={{ fontSize: 16 }} /> : <WatchLaterIcon sx={{ fontSize: 16 }} />}
                  {status}
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Valid Period</h3>
            <span className="text-sm font-medium text-gray-900 dark:text-white mt-1">{period}</span>
          </div>
          
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
          
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Discount</h3>
            <span className="text-sm font-medium text-gray-900 dark:text-white mt-1">{discount}</span>
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <IconButton 
          size="small" 
          onClick={handleClick}
          className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem 
            onClick={handleEdit}
            className="hover:bg-purple-50 dark:hover:bg-gray-700"
          >
            <span className="text-gray-700 dark:text-gray-500">Edit</span>
          </MenuItem>
          <MenuItem 
            onClick={handleDelete}
            className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
    </motion.div>
  );
}