import React, { useState, useRef } from "react";
import {
    User,
    Calendar,
    Bell,
    TrendingUp,
    Printer,
    Share2,
    CheckCircle,
    Clock,
    AlertCircle,
    Check,
    Plus,
    Info,
    Heart,
    Shield,
    Zap,
    Target,
    Award,
    Users,
    BookOpen,
    Sparkles
} from "lucide-react";

const ImmunizationTracking = () => {
    const [activeTab, setActiveTab] = useState("current");
    const [children, setChildren] = useState([
        {
            id: 1,
            name: "Aarav Sharma",
            dob: "2023-05-15",
            gender: "Male",
            photo: "https://randomuser.me/api/portraits/lego/1.jpg",
            vaccines: [
                { name: "BCG", dueDate: "2023-05-15", status: "completed", administeredDate: "2023-05-16" },
                { name: "Hepatitis B (Birth Dose)", dueDate: "2023-05-15", status: "completed", administeredDate: "2023-05-16" },
                { name: "OPV-0", dueDate: "2023-05-15", status: "completed", administeredDate: "2023-05-16" },
                { name: "DTP-1", dueDate: "2023-07-01", status: "completed", administeredDate: "2023-07-03" },
                { name: "Hib-1", dueDate: "2023-07-01", status: "completed", administeredDate: "2023-07-03" },
                { name: "PCV-1", dueDate: "2023-07-01", status: "completed", administeredDate: "2023-07-03" },
                { name: "Rotavirus-1", dueDate: "2023-07-01", status: "completed", administeredDate: "2023-07-03" },
                { name: "DTP-2", dueDate: "2025-07-30", status: "pending", administeredDate: null },
                { name: "Hib-2", dueDate: "2025-07-25", status: "pending", administeredDate: null },
                { name: "PCV-2", dueDate: "2025-06-01", status: "pending", administeredDate: null },
                { name: "Rotavirus-2", dueDate: "2025-08-01", status: "pending", administeredDate: null },
                { name: "Measles", dueDate: "2025-12-15", status: "upcoming", administeredDate: null },
                { name: "MMR", dueDate: "2026-02-15", status: "upcoming", administeredDate: null },
            ],
        },
        {
            id: 2,
            name: "Ananya Patel",
            dob: "2021-11-22",
            gender: "Female",
            photo: "https://randomuser.me/api/portraits/lego/2.jpg",
            vaccines: [
                { name: "BCG", dueDate: "2021-11-22", status: "completed", administeredDate: "2021-11-23" },
                { name: "Hepatitis B (Birth Dose)", dueDate: "2021-11-22", status: "completed", administeredDate: "2021-11-23" },
                { name: "DTP-1", dueDate: "2022-01-01", status: "completed", administeredDate: "2022-01-03" },
                { name: "MMR-1", dueDate: "2025-08-15", status: "pending", administeredDate: null },
                { name: "Varicella", dueDate: "2025-12-01", status: "upcoming", administeredDate: null },
            ],
        },
    ]);

    const [selectedChild, setSelectedChild] = useState(0);
    const [showAddChild, setShowAddChild] = useState(false);
    const [newChild, setNewChild] = useState({ name: "", dob: "", gender: "Male" });
    const currentChild = children[selectedChild];
    const vaccineListRef = useRef(null);

    // Calculate vaccine statistics
    const completedVaccines = currentChild.vaccines.filter(v => v.status === "completed").length;
    const pendingVaccines = currentChild.vaccines.filter(v => v.status === "pending").length;
    const upcomingVaccines = currentChild.vaccines.filter(v => v.status === "upcoming").length;
    const totalVaccines = currentChild.vaccines.length;
    const completionPercentage = Math.round((completedVaccines / totalVaccines) * 100);

    // Date parsing and formatting
    const today = new Date();
    const parseDate = (dateStr) => {
        const parts = dateStr.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
    };

    const formatDate = (dateStr) => {
        const date = parseDate(dateStr);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    const overdueVaccines = currentChild.vaccines.filter(v => v.status === "pending" && parseDate(v.dueDate) < today);
    const pendingSoonVaccines = currentChild.vaccines.filter(v => {
        if (v.status !== "pending") return false;
        const dueDate = parseDate(v.dueDate);
        const diffDays = (dueDate - today) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= 7;
    });

    // Filter vaccines
    const filteredVaccines = currentChild.vaccines.filter(vaccine => {
        if (activeTab === "current") return vaccine.status === "pending";
        if (activeTab === "completed") return vaccine.status === "completed";
        if (activeTab === "upcoming") return vaccine.status === "upcoming";
        return true;
    });

    // Handlers
    const handlePendingCardClick = () => {
        setActiveTab("current");
        vaccineListRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleAddChild = () => {
        if (newChild.name && newChild.dob) {
            const childId = children.length + 1;
            const newChildData = {
                id: childId,
                name: newChild.name,
                dob: newChild.dob,
                gender: newChild.gender,
                photo: `https://randomuser.me/api/portraits/lego/${childId}.jpg`,
                vaccines: [
                    { name: "BCG", dueDate: newChild.dob, status: "pending", administeredDate: null },
                    { name: "Hepatitis B (Birth Dose)", dueDate: newChild.dob, status: "pending", administeredDate: null },
                ],
            };
            setChildren([...children, newChildData]);
            setNewChild({ name: "", dob: "", gender: "Male" });
            setShowAddChild(false);
            setSelectedChild(children.length);
        }
    };

    const updateVaccineStatus = (vaccineIndex, newStatus) => {
        const updatedChildren = [...children];
        const updatedVaccines = [...updatedChildren[selectedChild].vaccines];
        updatedVaccines[vaccineIndex] = {
            ...updatedVaccines[vaccineIndex],
            status: newStatus,
            administeredDate: newStatus === "completed" ? new Date().toISOString().split('T')[0] : null,
        };
        updatedChildren[selectedChild].vaccines = updatedVaccines;
        setChildren(updatedChildren);
    };

    const handleEnableNotifications = () => {
        alert("Notifications enabled! You'll receive reminders for upcoming vaccinations.");
    };

    const handlePrint = () => {
        window.print();
    };

    const handleShare = () => {
        const shareData = {
            title: `${currentChild.name}'s Vaccination Record`,
            text: `Vaccination completion: ${completionPercentage}%. ${completedVaccines} completed, ${pendingVaccines} pending.`,
        };
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            navigator.clipboard.writeText(shareData.text);
            alert("Vaccination summary copied to clipboard!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <style>
                {`
                 @keyframes fadeIn {
                   from { opacity: 0; transform: translateY(20px); }
                   to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideIn {
                   from { opacity: 0; transform: translateX(-20px); }
                   to { opacity: 1; transform: translateX(0); }
                 }
                @keyframes bounce {
                   0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
                   40%, 43% { transform: translateY(-10px); }
                   70% { transform: translateY(-5px); }
                 }
                @keyframes pulse {
                   0%, 100% { transform: scale(1); }
                   50% { transform: scale(1.05); }
                 }
                .animate-fadeIn {
                   animation: fadeIn 0.6s ease-out;
                 }
                .animate-slideIn {
                    animation: slideIn 0.5s ease-out;
                 }
                .animate-bounce-custom {
                    animation: bounce 2s infinite;
                 }
                .animate-pulse-custom {
                    animation: pulse 2s infinite;
                 }
                .hover-scale {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                 }
                .hover-scale:hover {
                    transform: translateY(-4px) scale(1.02);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                 }
                .gradient-bg {
                   background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
                  }
                .glass-effect {
                   background: rgba(59, 130, 246, 0.2);
                   backdrop-filter: blur(10px);
                   border: 1px solid rgba(59, 130, 246, 0.3);
                 }
                .card-glow {
                   box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 4px 6px -2px rgba(59, 130, 246, 0.1);
                 }
                .progress-glow {
                   box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
                 }
                .tooltip {
                   position: relative;
                }
                .tooltip:hover::after {
                   content: attr(data-tooltip);
                   position: absolute;
                   bottom: 100%;
                   left: 50%;
                   transform: translateX(-50%);
                   background: #1e40af;
                   color: white;
                   padding: 6px 12px;
                   border-radius: 6px;
                   font-size: 12px;
                   white-space: nowrap;
                   z-index: 10;
                   margin-bottom: 8px;
                 }

                @media (max-width: 640px) {
                 .tooltip:hover::after {
                 white-space: normal;
                 width: 200px;
                 text-align: center;
                 }
                .animate-bounce-custom {
                  animation-duration: 3s;
                 }
                .animate-pulse-custom {
                  animation-duration: 3s;
                 }
                .hover-scale:hover {
                   transform: translateY(-2px) scale(1.01);
                }
                .card-glow {
                   box-shadow: 0 4px 10px -2px rgba(59, 130, 246, 0.1);
                 }
                .progress-glow {
                  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
                 }
                }
                @media (max-width: 480px) {
                  .text-5xl {
                    font-size: 2.5rem;
                   }
                  .text-4xl {
                    font-size: 2rem;
                   }
                  .text-3xl {
                    font-size: 1.75rem;
                  }
                  .text-2xl {
                    font-size: 1.5rem;
                   }
                  .text-lg {
                    font-size: 1.125rem;
                   }
                  .text-sm {
                    font-size: 0.875rem;
                   }
                  .p-8 {
                    padding: 1.5rem;
                   }
                  .p-6 {
                    padding: 1.25rem;
                   }
                  .p-4 {
                    padding: 1rem;
                   }
                  .min-h-[200px] {
                    min-height: 150px;
                   }                   
            }
        `}
            </style>

            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {/* Enhanced Header */}
                <div className="text-center py-10 sm:py-12 md:py-16 gradient-bg rounded-3xl mb-6 sm:mb-8 shadow-2xl animate-fadeIn relative overflow-hidden">
                    <div className="absolute inset-0 glass-effect"></div>
                    <div className="relative z-10">

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
                            Immunization Tracking
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">
                            Personalized tracking system to ensure complete vaccination coverage for every child
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-8">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-white">{children.length}</div>
                                <div className="text-xs sm:text-sm text-white text-opacity-80">Children Protected</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-white">{children.reduce((acc, child) => acc + child.vaccines.filter(v => v.status === "completed").length, 0)}</div>
                                <div className="text-xs sm:text-sm text-white text-opacity-80">Vaccines Completed</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Child Selector */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 animate-slideIn card-glow">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                            <Users className="mr-2 sm:mr-3 text-indigo-600" size={24} />
                            Your Children
                        </h2>
                        <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mt-2 sm:mt-0">
                            {children.length} profile{children.length !== 1 ? 's' : ''}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {children.map((child, index) => (
                            <div
                                key={child.id}
                                onClick={() => setSelectedChild(index)}
                                className={`group relative p-4 sm:p-6 border-2 rounded-2xl cursor-pointer transition-all hover-scale ${selectedChild === index
                                    ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                                    : "border-gray-200 hover:border-indigo-300 bg-white hover:bg-gray-50"
                                    }`}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && setSelectedChild(index)}
                                aria-label={`Select ${child.name}`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-3 sm:mb-4">
                                        <img
                                            src={child.photo}
                                            alt={child.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-4 ring-indigo-200 transition-all group-hover:ring-indigo-300"
                                        />
                                        {selectedChild === index && (
                                            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <Check className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{child.name}</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Born {formatDate(child.dob)}</p>
                                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs">
                                        <div className="flex items-center text-green-600">
                                            <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                                            {child.vaccines.filter(v => v.status === "completed").length}
                                        </div>
                                        <div className="flex items-center text-yellow-600">
                                            <Clock className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                                            {child.vaccines.filter(v => v.status === "pending").length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {!showAddChild ? (
                            <div
                                onClick={() => setShowAddChild(true)}
                                className="group p-4 sm:p-6 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all hover-scale flex flex-col items-center justify-center min-h-[150px] sm:min-h-[200px]"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && setShowAddChild(true)}
                                aria-label="Add new child"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
                                    <Plus className="text-indigo-600 group-hover:text-indigo-700" size={24} />
                                </div>
                                <h3 className="font-bold text-gray-700 text-base sm:text-lg mb-1 sm:mb-2">Add New Child</h3>
                                <p className="text-xs sm:text-sm text-gray-500">Start tracking vaccinations</p>
                            </div>
                        ) : (
                            <div className="p-4 sm:p-6 border-2 border-indigo-300 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50">
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="text-center mb-3 sm:mb-4">
                                        <h3 className="font-bold text-indigo-900 text-base sm:text-lg">New Child Profile</h3>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Child's Full Name"
                                        value={newChild.name}
                                        onChange={(e) => setNewChild({ ...newChild, name: e.target.value })}
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all bg-white"
                                        aria-label="Child's full name"
                                    />
                                    <input
                                        type="date"
                                        value={newChild.dob}
                                        onChange={(e) => setNewChild({ ...newChild, dob: e.target.value })}
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all bg-white"
                                        aria-label="Child's date of birth"
                                    />
                                    <select
                                        value={newChild.gender}
                                        onChange={(e) => setNewChild({ ...newChild, gender: e.target.value })}
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all bg-white"
                                        aria-label="Child's gender"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                                        <button
                                            onClick={handleAddChild}
                                            className="flex-1 py-2 sm:py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all flex items-center justify-center text-sm sm:text-base"
                                            aria-label="Add new child"
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add Child
                                        </button>
                                        <button
                                            onClick={() => setShowAddChild(false)}
                                            className="flex-1 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all text-sm sm:text-base"
                                            aria-label="Cancel adding child"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Enhanced Progress Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8" role="list" aria-label="Vaccination progress overview">
                    <div
                        className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn card-glow relative overflow-hidden"
                        role="listitem"
                        aria-label={`Completion: ${completionPercentage} percent`}
                    >
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4 sm:mb-6">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-600 font-semibold flex items-center mb-2">
                                        <Target className="mr-2 text-indigo-600" size={16} />
                                        Overall Progress
                                        <Info className="ml-2 w-3 sm:w-4 h-3 sm:h-4 text-gray-400 tooltip" data-tooltip="Percentage of vaccines completed" />
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-3 sm:mb-4">{completionPercentage}%</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-indigo-100 rounded-2xl">
                                    <TrendingUp className="text-indigo-600" size={24} />
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-3 sm:mb-4 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 sm:h-4 rounded-full transition-all duration-1000 progress-glow"
                                    style={{ width: `${completionPercentage}%` }}
                                />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                {completedVaccines} of {totalVaccines} vaccines completed
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn card-glow relative overflow-hidden"
                        role="listitem"
                        aria-label={`Completed vaccines: ${completedVaccines} out of ${totalVaccines}`}
                    >
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4 sm:mb-6">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-600 font-semibold flex items-center mb-2">
                                        <Award className="mr-2 text-green-500" size={16} />
                                        Completed
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-extrabold text-green-600">{completedVaccines}</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-green-100 rounded-2xl">
                                    <CheckCircle className="text-green-600" size={24} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs sm:text-sm text-gray-500">Protection Achieved</p>
                                <Sparkles className="text-green-400 animate-bounce-custom" size={14} />
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn cursor-pointer card-glow relative overflow-hidden group"
                        onClick={handlePendingCardClick}
                        role="listitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") handlePendingCardClick();
                        }}
                        aria-label={`Pending vaccines: ${pendingVaccines}, Overdue: ${overdueVaccines.length}, Pending Soon: ${pendingSoonVaccines.length}`}
                    >
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4 sm:mb-6">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-600 font-semibold flex items-center mb-2">
                                        <Zap className="mr-2 text-yellow-500" size={16} />
                                        Action Needed
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-extrabold text-yellow-600">{pendingVaccines}</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition-all">
                                    <Clock className="text-yellow-600" size={24} />
                                </div>
                            </div>
                            {pendingVaccines > 0 && (
                                <div className="space-y-2">
                                    {overdueVaccines.length > 0 && (
                                        <div className="flex items-center text-red-600 text-xs sm:text-sm font-medium">
                                            <AlertCircle className="mr-2 w-3 sm:w-4 h-3 sm:h-4" />
                                            {overdueVaccines.length} overdue
                                        </div>
                                    )}
                                    {pendingSoonVaccines.length > 0 && (
                                        <div className="flex items-center text-orange-600 text-xs sm:text-sm font-medium">
                                            <Clock className="mr-2 w-3 sm:w-4 h-3 sm:h-4" />
                                            {pendingSoonVaccines.length} due soon
                                        </div>
                                    )}
                                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-all">
                                        Click to view details →
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn card-glow relative overflow-hidden"
                        role="listitem"
                        aria-label={`Upcoming vaccines: ${upcomingVaccines}`}
                    >
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4 sm:mb-6">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-600 font-semibold flex items-center mb-2">
                                        <Calendar className="mr-2 text-blue-500" size={16} />
                                        Upcoming
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">{upcomingVaccines}</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-blue-100 rounded-2xl">
                                    <Calendar className="text-blue-600" size={24} />
                                </div>
                            </div>
                            {upcomingVaccines > 0 && (
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Next scheduled:</p>
                                    <p className="text-xs sm:text-sm font-medium text-blue-600">
                                        {formatDate(currentChild.vaccines.find((v) => v.status === "upcoming")?.dueDate)}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Enhanced Vaccine Tracking */}
                <div ref={vaccineListRef} className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-6 sm:mb-8 animate-fadeIn card-glow">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Vaccination Schedule</h2>
                        <p className="text-indigo-100 text-sm sm:text-base">Track and manage {currentChild.name}'s immunizations</p>
                    </div>

                    <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                        <nav className="flex -mb-px px-4 sm:px-6 overflow-x-auto">
                            {[
                                { key: "current", label: "Current", count: pendingVaccines, color: "yellow" },
                                { key: "completed", label: "Completed", count: completedVaccines, color: "green" },
                                { key: "upcoming", label: "Upcoming", count: upcomingVaccines, color: "blue" }
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`py-4 sm:py-6 px-4 sm:px-8 text-center border-b-4 font-bold text-xs sm:text-sm transition-all relative group whitespace-nowrap ${activeTab === tab.key
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-transparent text-gray-600 hover:text-indigo-600 hover:border-indigo-300"
                                        }`}
                                    aria-label={`Show ${tab.label.toLowerCase()} vaccines`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>{tab.label}</span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${activeTab === tab.key
                                            ? "bg-indigo-100 text-indigo-700"
                                            : "bg-gray-100 text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                                            }`}>
                                            {tab.count}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-4 sm:p-8">
                        {filteredVaccines.length > 0 ? (
                            <div className="space-y-3 sm:space-y-4">
                                {filteredVaccines.map((vaccine, index) => {
                                    const actualIndex = currentChild.vaccines.findIndex(v => v.name === vaccine.name);
                                    const isOverdue = vaccine.status === "pending" && parseDate(vaccine.dueDate) < today;

                                    return (
                                        <div
                                            key={index}
                                            className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-2 rounded-2xl transition-all hover-scale ${isOverdue
                                                ? "border-red-200 bg-red-50 hover:border-red-300"
                                                : "border-gray-200 hover:border-indigo-300 bg-white hover:bg-gray-50"
                                                }`}
                                            role="listitem"
                                            aria-label={`${vaccine.name} - ${vaccine.status}`}
                                        >
                                            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${vaccine.status === "completed"
                                                    ? "bg-green-100"
                                                    : vaccine.status === "pending"
                                                        ? isOverdue ? "bg-red-100" : "bg-yellow-100"
                                                        : "bg-blue-100"
                                                    }`}>
                                                    {vaccine.status === "completed" ? (
                                                        <CheckCircle className="text-green-600" size={20} />
                                                    ) : vaccine.status === "pending" ? (
                                                        <Clock className={isOverdue ? "text-red-600" : "text-yellow-600"} size={20} />
                                                    ) : (
                                                        <Calendar className="text-blue-600" size={20} />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-indigo-900 transition-all">
                                                        {vaccine.name}
                                                    </h3>
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-500">
                                                        <p>Due: {formatDate(vaccine.dueDate)}</p>
                                                        {vaccine.administeredDate && (
                                                            <p>Administered: {formatDate(vaccine.administeredDate)}</p>
                                                        )}
                                                        {isOverdue && (
                                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-1 sm:mt-0">
                                                                Overdue
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                                                {vaccine.status === "completed" && (
                                                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800 tooltip" data-tooltip="Vaccine completed">
                                                        <Check className="mr-1 w-3 sm:w-4 h-3 sm:h-4" />
                                                        Completed
                                                    </span>
                                                )}
                                                {vaccine.status === "pending" && (
                                                    <>
                                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800 tooltip" data-tooltip={isOverdue ? "Urgent: Schedule immediately" : "Schedule this vaccination soon"}>
                                                            <AlertCircle className="mr-1 w-3 sm:w-4 h-3 sm:h-4" />
                                                            {isOverdue ? "Overdue" : "Pending"}
                                                        </span>
                                                        <button
                                                            onClick={() => updateVaccineStatus(actualIndex, "completed")}
                                                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all flex-1 sm:flex-none"
                                                            aria-label={`Mark ${vaccine.name} as completed`}
                                                        >
                                                            Mark Complete
                                                        </button>
                                                    </>
                                                )}
                                                {vaccine.status === "upcoming" && (
                                                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 tooltip" data-tooltip="Scheduled for future administration">
                                                        <Calendar className="mr-1 w-3 sm:w-4 h-3 sm:h-4" />
                                                        Upcoming
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-8 sm:py-10 text-gray-500 text-base sm:text-lg">
                                No {activeTab} vaccines found
                            </div>
                        )}
                    </div>
                </div>

                {/* Enhanced Reminders and Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn card-glow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                <Bell className="mr-2 text-yellow-500" size={20} />
                                Vaccination Reminders
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm">Stay on top of upcoming vaccinations with timely notifications</p>
                            <button
                                onClick={handleEnableNotifications}
                                className="w-full bg-indigo-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all flex items-center justify-center text-sm sm:text-base"
                                aria-label="Enable vaccination reminders"
                            >
                                <Bell className="w-4 h-4 mr-2" />
                                Enable Notifications
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn card-glow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                <Heart className="mr-2 text-green-500" size={20} />
                                Growth Tracking
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm">Monitor your child's health milestones alongside vaccinations</p>
                            <button
                                className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all flex items-center justify-center text-sm sm:text-base"
                                aria-label="View growth chart"
                            >
                                <TrendingUp className="w-4 h-4 mr-2" />
                                View Growth Chart
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl hover-scale transition-all animate-fadeIn card-glow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-purple-100 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                <BookOpen className="mr-2 text-purple-500" size={20} />
                                Vaccination Records
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm">Easily print or share official vaccination records</p>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                <button
                                    onClick={handlePrint}
                                    className="flex-1 bg-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all flex items-center justify-center text-sm sm:text-base"
                                    aria-label="Print vaccination records"
                                >
                                    <Printer className="w-4 h-4 mr-2" />
                                    Print
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="flex-1 bg-gray-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-all flex items-center justify-center text-sm sm:text-base"
                                    aria-label="Share vaccination records"
                                >
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Vaccination Timeline */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 animate-fadeIn card-glow">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                        <Calendar className="mr-2 sm:mr-3 text-indigo-600" size={24} />
                        Vaccination Timeline
                    </h2>
                    <div className="relative pl-6 sm:pl-8">
                        <div className="absolute left-2 sm:left-2.5 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 to-purple-200" aria-hidden="true"></div>
                        <div className="space-y-4 sm:space-y-6">
                            {currentChild.vaccines.slice(0, 8).map((vaccine, index) => (
                                <div key={index} className="flex items-center relative">
                                    <div
                                        className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full absolute left-0 z-10 border-3 sm:border-4 border-white ${vaccine.status === "completed"
                                            ? "bg-green-500"
                                            : vaccine.status === "pending"
                                                ? parseDate(vaccine.dueDate) < today ? "bg-red-500" : "bg-yellow-500"
                                                : "bg-blue-500"
                                            }`}
                                    ></div>
                                    <div className="ml-8 sm:ml-10 flex-1">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                            <div className="flex items-center">
                                                <span className="font-bold text-gray-900 text-base sm:text-lg">{vaccine.name}</span>
                                                <span
                                                    className={`ml-2 sm:ml-3 inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium ${vaccine.status === "completed"
                                                        ? "bg-green-100 text-green-800"
                                                        : vaccine.status === "pending"
                                                            ? parseDate(vaccine.dueDate) < today
                                                                ? "bg-red-100 text-red-800"
                                                                : "bg-yellow-100 text-yellow-800"
                                                            : "bg-blue-100 text-blue-800"
                                                        }`}
                                                >
                                                    {vaccine.status === "pending" && parseDate(vaccine.dueDate) < today
                                                        ? "Overdue"
                                                        : vaccine.status.charAt(0).toUpperCase() + vaccine.status.slice(1)}
                                                </span>
                                            </div>
                                            <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">{formatDate(vaccine.dueDate)}</span>
                                        </div>
                                        <div
                                            className={`h-1 rounded-full mt-1 sm:mt-2 ${vaccine.status === "completed"
                                                ? "bg-green-200"
                                                : vaccine.status === "pending"
                                                    ? parseDate(vaccine.dueDate) < today ? "bg-red-200" : "bg-yellow-200"
                                                    : "bg-blue-200"
                                                }`}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enhanced Missing Vaccines Alert */}
                {pendingVaccines > 0 && (
                    <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-2xl animate-fadeIn card-glow">
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex-shrink-0 mb-2 sm:mb-0">
                                <AlertCircle className="h-6 sm:h-8 w-6 sm:w-8 text-red-600 animate-bounce-custom" aria-hidden="true" />
                            </div>
                            <div className="sm:ml-4">
                                <h3 className="text-base sm:text-lg font-bold text-red-800">Urgent: Action Required</h3>
                                <p className="text-xs sm:text-sm text-red-700 mt-1 sm:mt-2">
                                    {currentChild.name} has {pendingVaccines} pending vaccination{pendingVaccines !== 1 ? "s" : ""}.
                                    {overdueVaccines.length > 0 && (
                                        <span> {overdueVaccines.length} {overdueVaccines.length === 1 ? "is" : "are"} overdue.</span>
                                    )}
                                    Schedule now to ensure full protection.
                                </p>
                                <button
                                    onClick={() => alert("Feature coming soon! This will help you find nearby vaccination centers.")}
                                    className="mt-3 sm:mt-4 bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all flex items-center"
                                    aria-label="Find nearby vaccination centers"
                                >
                                    <Zap className="w-4 h-4 mr-2" />
                                    Find Vaccination Centers
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImmunizationTracking;
