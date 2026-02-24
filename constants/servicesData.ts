// constants/servicesData.ts

export interface Service {
  id: string;
  name: string;
  category: string;
  description?: string;
  price?: number | string;
}

export const services: Service[] = [
  // ================= BEAUTY & SALON =================
  { id: '1', name: 'Salon at Home (Women)', category: 'Beauty & Salon', description: 'Professional beauty services at your doorstep for women', price: 899 },
  { id: '2', name: 'Salon at Home (Men)', category: 'Beauty & Salon', description: 'Grooming services including haircut, beard trim & facial', price: 499 },
  { id: '3', name: 'Bridal Makeup', category: 'Beauty & Salon', description: 'Complete bridal makeup with trial session', price: 8500 },
  { id: '4', name: 'Party Makeup', category: 'Beauty & Salon' },
  { id: '5', name: 'Haircut', category: 'Beauty & Salon' },
  { id: '6', name: 'Hair Spa', category: 'Beauty & Salon' },
  { id: '7', name: 'Hair Coloring', category: 'Beauty & Salon' },
  { id: '8', name: 'Keratin Treatment', category: 'Beauty & Salon' },
  { id: '9', name: 'Smoothening', category: 'Beauty & Salon' },
  { id: '10', name: 'Facial', category: 'Beauty & Salon' },
  { id: '11', name: 'Cleanup', category: 'Beauty & Salon' },
  { id: '12', name: 'Waxing', category: 'Beauty & Salon' },
  { id: '13', name: 'Threading', category: 'Beauty & Salon' },
  { id: '14', name: 'Manicure', category: 'Beauty & Salon' },
  { id: '15', name: 'Pedicure', category: 'Beauty & Salon' },
  { id: '16', name: 'Beard Styling', category: 'Beauty & Salon' },
  { id: '17', name: 'Pre Bridal Package', category: 'Beauty & Salon' },
  { id: '18', name: 'Nail Art', category: 'Beauty & Salon' },
  { id: '19', name: 'Body Polishing', category: 'Beauty & Salon' },

  // ================= WOMEN SPECIAL =================
  { id: '20', name: 'Gynecologist Consultation', category: 'Women Healthcare' },
  { id: '21', name: 'Pregnancy Care at Home', category: 'Women Healthcare' },
  { id: '22', name: 'Maternity Nurse', category: 'Women Healthcare' },
  { id: '23', name: 'Ladies Gym Trainer', category: 'Women Fitness' },
  { id: '24', name: 'Yoga for Women', category: 'Women Fitness' },
  { id: '25', name: 'Women Legal Help', category: 'Women Support' },
  { id: '26', name: 'Women Counseling', category: 'Women Support' },

  // ================= MEN =================
  { id: '27', name: 'Men Fitness Trainer', category: 'Men Fitness' },
  { id: '28', name: 'Diet Consultation', category: 'Men Fitness' },

  // ================= BABY =================
  { id: '29', name: 'Baby Caretaker', category: 'Baby Care' },
  { id: '30', name: 'Newborn Care Specialist', category: 'Baby Care' },
  { id: '31', name: 'Vaccination Support', category: 'Baby Healthcare' },

  // ================= ELDERLY =================
  { id: '32', name: 'Elderly Care', category: 'Elderly Care' },
  { id: '33', name: 'Home Nurse for Elderly', category: 'Elderly Care' },
  { id: '34', name: 'Physiotherapy at Home', category: 'Elderly Healthcare' },

  // ================= HOME REPAIR =================
  { id: '35', name: 'Electrician', category: 'Home Repair', description: 'All electrical repairs & installations', price: 350 },
  { id: '36', name: 'Home Wiring', category: 'Home Repair' },
  { id: '37', name: 'Fan Installation', category: 'Home Repair' },
  { id: '38', name: 'Switch Board Repair', category: 'Home Repair' },
  { id: '39', name: 'Plumber', category: 'Home Repair', description: 'Leak fixing, pipe & fitting work', price: 400 },
  { id: '40', name: 'Carpenter', category: 'Home Repair' },
  { id: '41', name: 'Painter', category: 'Home Repair' },

  // ================= APPLIANCE REPAIR =================
  { id: '42', name: 'AC Repair', category: 'Appliance Repair', description: 'Gas filling, cleaning & full servicing', price: 799 },
  { id: '43', name: 'AC Installation', category: 'Installation' },
  { id: '44', name: 'Cooler Repair', category: 'Appliance Repair' },
  { id: '45', name: 'Cooler Installation', category: 'Installation' },
  { id: '46', name: 'Refrigerator Repair', category: 'Appliance Repair' },
  { id: '47', name: 'Refrigerator Installation', category: 'Installation' },
  { id: '48', name: 'Washing Machine Repair', category: 'Appliance Repair' },
  { id: '49', name: 'Geyser Repair', category: 'Appliance Repair' },
  { id: '50', name: 'Geyser Installation', category: 'Installation' },
  { id: '51', name: 'TV Repair', category: 'Appliance Repair' },
  { id: '52', name: 'Mobile Repair', category: 'Device Repair' },
  { id: '53', name: 'Laptop Repair', category: 'Device Repair' },
  // ================= INSTALLATION =================
  { id: '54', name: 'CCTV Installation', category: 'Installation' },
  { id: '55', name: 'TV Wall Mounting', category: 'Installation' },
  { id: '56', name: 'WiFi Setup', category: 'Installation' },
  { id: '57', name: 'Inverter Installation', category: 'Installation' },

  // ================= CLEANING =================
  { id: '58', name: 'Bathroom Cleaning', category: 'Cleaning' },
  { id: '59', name: 'Kitchen Cleaning', category: 'Cleaning' },
  { id: '60', name: 'Sofa Cleaning', category: 'Cleaning' },
  { id: '61', name: 'Deep Home Cleaning', category: 'Cleaning' },
  { id: '62', name: 'Water Tank Cleaning', category: 'Cleaning' },

  // ================= HEALTHCARE =================
  { id: '63', name: 'Doctor Consultation (Online)', category: 'Healthcare' },
  { id: '64', name: 'Doctor Home Visit', category: 'Healthcare' },
  { id: '65', name: 'General Physician', category: 'Healthcare' },
  { id: '66', name: 'Dentist Consultation', category: 'Healthcare' },
  { id: '67', name: 'Cardiologist Consultation', category: 'Healthcare' },
  { id: '68', name: 'Pediatrician Consultation', category: 'Healthcare' },
  { id: '69', name: 'Full Body Checkup', category: 'Diagnostics' },
  { id: '70', name: 'Blood Test at Home', category: 'Diagnostics' },
  { id: '71', name: 'ECG at Home', category: 'Diagnostics' },
  { id: '72', name: 'Oxygen Support at Home', category: 'Healthcare' },
  { id: '73', name: 'Medicine Order Online', category: 'Pharmacy' },

  // ================= INSURANCE =================
  { id: '74', name: 'Accident Cover Insurance', category: 'Insurance' },
  { id: '75', name: 'Health Insurance', category: 'Insurance' },
  { id: '76', name: 'Life Insurance', category: 'Insurance' },
  { id: '77', name: 'Vehicle Insurance', category: 'Insurance' },

  // ================= LOGISTICS =================
  { id: '78', name: 'Packers & Movers', category: 'Logistics' },
  { id: '79', name: 'Vehicle Transport', category: 'Logistics' },
  { id: '80', name: 'Courier Service', category: 'Logistics' },
  { id: '81', name: 'Truck Rental', category: 'Logistics' },

  // ================= EDUCATION =================
  { id: '82', name: 'Home Tutor', category: 'Education' },
  { id: '83', name: 'Online Classes', category: 'Education' },
  { id: '84', name: 'Govt Exam Preparation', category: 'Education' },
  { id: '85', name: 'Spoken English Classes', category: 'Education' },

  // ================= EVENT & DECOR =================
  { id: '86', name: 'Interior Decoration', category: 'Home Decoration' },
  { id: '87', name: 'Wallpaper Installation', category: 'Home Decoration' },
  { id: '88', name: 'Birthday Decoration', category: 'Event Services' },
  { id: '89', name: 'Wedding Planning', category: 'Event Services' },

  // ================= EMERGENCY =================
  { id: '90', name: '24x7 Emergency Help', category: 'Emergency' },
  { id: '91', name: 'Ambulance Service', category: 'Emergency' },
  { id: '92', name: 'Police Help', category: 'Emergency' },
  { id: '93', name: 'Fire Emergency Support', category: 'Emergency' },
  { id: '94', name: 'Roadside Assistance', category: 'Emergency' },

  // ================= SUPPORT =================
  { id: '95', name: 'Customer Support', category: 'Support' },
  { id: '96', name: 'Complaint Registration', category: 'Support' },
  { id: '97', name: 'Feedback & Suggestions', category: 'Support' },
  // ================= NEW ADDED HOME SERVICES (Previous batches) =================
  { id: '98', name: 'Pest Control', category: 'Cleaning & Pest Control' },
  { id: '99', name: 'Laundry / Dry Cleaning at Home', category: 'Cleaning' },
  { id: '100', name: 'Car Wash / Cleaning at Home', category: 'Cleaning' },
  { id: '101', name: 'Home Chef / Cooking Service', category: 'Home Services' },
  { id: '102', name: 'Gardening / Lawn Care', category: 'Home Decoration' },
  { id: '103', name: 'Full Home Painting', category: 'Home Repair' },
  { id: '104', name: 'Wall Painting / Touch-up', category: 'Home Repair' },
  { id: '105', name: 'Water Purifier Repair & Service', category: 'Appliance Repair' },
  { id: '106', name: 'Massage Therapy at Home', category: 'Beauty & Salon' },
  { id: '107', name: 'Home Disinfection / Sanitization', category: 'Cleaning' },
  { id: '108', name: 'Interior Design Consultation', category: 'Home Decoration' },
  { id: '109', name: 'Handyman Services (General)', category: 'Home Repair' },
  { id: '110', name: 'Home Security System Installation', category: 'Installation' },

  // Education more
  { id: '111', name: 'JEE / IIT Preparation (Home/Online)', category: 'Education' },
  { id: '112', name: 'NEET Preparation (Home/Online)', category: 'Education' },
  { id: '113', name: 'UPSC / Civil Services Coaching', category: 'Education' },
  { id: '114', name: 'SSC / Banking Exam Preparation', category: 'Education' },
  { id: '115', name: 'GATE / Engineering Entrance Prep', category: 'Education' },
  { id: '116', name: 'Kids School Tuition (Class 1-10)', category: 'Education' },
  { id: '117', name: 'Board Exam Preparation (CBSE/ICSE)', category: 'Education' },
  { id: '118', name: 'Olympiad / NTSE Coaching', category: 'Education' },

  // Pest more
  { id: '119', name: 'Termite Control', category: 'Cleaning & Pest Control' },
  { id: '120', name: 'Rodent / Rat Control', category: 'Cleaning & Pest Control' },
  { id: '121', name: 'Cockroach / Bed Bug Control', category: 'Cleaning & Pest Control' },

  // More Home Services
  { id: '122', name: 'Full Home Renovation', category: 'Home Repair' },
  { id: '123', name: 'False Ceiling Installation', category: 'Home Decoration' },
  { id: '124', name: 'Tiling / Flooring Work', category: 'Home Repair' },
  { id: '125', name: 'Maid / Domestic Help', category: 'Home Services' },
  { id: '126', name: 'Full Time Cook / Home Chef', category: 'Home Services' },
  { id: '127', name: 'Pet Grooming / Care at Home', category: 'Pet Care' },
  { id: '128', name: 'Bike / Two-Wheeler Service at Home', category: 'Vehicle Services' },
  { id: '129', name: 'General Fitness Trainer', category: 'Fitness' },
  { id: '130', name: 'Physiotherapy at Home (General)', category: 'Healthcare' },
  { id: '131', name: 'Ladies Tailor / Stitching at Home', category: 'Home Services' },
  { id: '132', name: 'Home Inverter / Battery Service', category: 'Appliance Repair' },
  // ================= MEN GROOMING & WELLNESS =================
  { id: '133', name: 'Men\'s Haircut & Beard Styling Package', category: 'Men Grooming' },
  { id: '134', name: 'Full Body Massage for Men', category: 'Men Wellness' },
  { id: '135', name: 'Head & Shoulder Massage for Men', category: 'Men Wellness' },
  { id: '136', name: 'Deep Tissue / Swedish Massage for Men', category: 'Men Wellness' },
  { id: '137', name: 'Men\'s Facial & Cleanup', category: 'Men Grooming' },
  { id: '138', name: 'Detan Treatment for Men', category: 'Men Grooming' },
  { id: '139', name: 'Men\'s Manicure & Pedicure', category: 'Men Grooming' },
  { id: '140', name: 'Body Waxing for Men', category: 'Men Grooming' },
  { id: '141', name: 'Body Polishing / Scrub for Men', category: 'Men Grooming' },
  { id: '142', name: 'Hair Color for Men', category: 'Men Grooming' },
  { id: '143', name: 'Personal Weight Training for Men', category: 'Men Fitness' },
  { id: '144', name: 'Men\'s Weight Loss / Muscle Gain Consultation', category: 'Men Fitness' },
  { id: '145', name: 'Stress Relief Massage for Men', category: 'Men Wellness' },
  { id: '146', name: 'Premium Men\'s Grooming Package', category: 'Men Grooming' },

  // ================= FURTHER EXPANDED SERVICES =================
  // More Beauty & Salon Additions
  { id: '147', name: 'Mehendi Application', category: 'Beauty & Salon' },
  { id: '148', name: 'Saree Draping', category: 'Beauty & Salon' },
  { id: '149', name: 'Laser Hair Removal', category: 'Beauty & Salon' },
  { id: '150', name: 'Spa at Home', category: 'Beauty & Salon' },
  { id: '151', name: 'Aromatherapy Massage', category: 'Beauty & Salon' },

  // Home Decoration More
  { id: '152', name: 'Curtain Installation', category: 'Home Decoration' },
  { id: '153', name: 'Modular Kitchen Design', category: 'Home Decoration' },
  { id: '154', name: 'Wardrobe Design', category: 'Home Decoration' },
  { id: '155', name: 'Furniture Assembly', category: 'Home Decoration' },
  { id: '156', name: 'Home Lighting Design', category: 'Home Decoration' },

  // Event Services More
  { id: '157', name: 'Corporate Event Planning', category: 'Event Services' },
  { id: '158', name: 'Anniversary Decoration', category: 'Event Services' },
  { id: '159', name: 'Baby Shower Planning', category: 'Event Services' },
  { id: '160', name: 'Catering Services', category: 'Event Services' },
  { id: '161', name: 'Photographer Booking', category: 'Event Services' },

  // Cleaning More
  { id: '162', name: 'Intense Bathroom Cleaning', category: 'Bathroom Cleaning' },
  { id: '163', name: 'Weekly Bathroom Cleaning', category: 'Bathroom Cleaning' },
  { id: '164', name: 'Intense Kitchen Cleaning', category: 'Kitchen Cleaning' },
  { id: '165', name: 'Carpet Cleaning', category: 'Cleaning' },
  { id: '166', name: 'Mattress Cleaning', category: 'Cleaning' },
  { id: '167', name: 'Curtain Cleaning', category: 'Cleaning' },
  { id: '168', name: 'Insta Maid Service', category: 'Cleaning' },

  // Home Repair More
  { id: '169', name: 'Pipe Leak Repair', category: 'Plumbing' },
  { id: '170', name: 'Tap Installation', category: 'Plumbing' },
  { id: '171', name: 'Furniture Repair', category: 'Carpentry' },
  { id: '172', name: 'Door Lock Installation', category: 'Carpentry' },
  { id: '173', name: 'Waterproofing', category: 'Home Repair' },
  { id: '174', name: 'Roof Repair', category: 'Home Repair' },

    // ================= EMERGENCY =================
  { id: '90', name: '24x7 Emergency Help', category: 'Emergency' },
  { id: '91', name: 'Ambulance Service', category: 'Emergency' },
  { id: '92', name: 'Police Help', category: 'Emergency' },
  { id: '93', name: 'Fire Emergency Support', category: 'Emergency' },
  { id: '94', name: 'Roadside Assistance', category: 'Emergency' },
  // Emergency More (expanded further if needed)
  { id: '175', name: 'Medical Emergency Support', category: 'Emergency' },
  { id: '176', name: 'Police Complaint Assistance', category: 'Emergency' },
  { id: '177', name: 'Disaster Recovery Help', category: 'Emergency' },
  { id: '225', name: 'National Emergency Helpline (112)', category: 'Emergency' },
  { id: '226', name: 'Women Safety Helpline', category: 'Emergency' },
  { id: '227', name: 'Child Helpline (1098)', category: 'Emergency' },
  { id: '228', name: 'LPG Gas Leak Emergency', category: 'Emergency' },
  { id: '229', name: 'Natural Disaster Support', category: 'Emergency' },
  
  // Installation More (Previous)
  { id: '178', name: 'Exhaust Fan Installation', category: 'Installation' },
  { id: '179', name: 'Ceiling Fan Installation', category: 'Installation' },
  { id: '180', name: 'Laptop Setup', category: 'Installation' },
  { id: '181', name: 'Computer Assembly', category: 'Installation' },
  { id: '182', name: 'Water Purifier Installation', category: 'Installation' },

  // Repairing More
  { id: '183', name: 'Microwave Repair', category: 'Appliance Repair' },
  { id: '184', name: 'Oven Repair', category: 'Appliance Repair' },
  { id: '185', name: 'Dishwasher Repair', category: 'Appliance Repair' },
  { id: '186', name: 'Computer Repair', category: 'Device Repair' },
  { id: '187', name: 'Exhaust Fan Repair', category: 'Appliance Repair' },
  { id: '188', name: 'Electrical Wiring Repair', category: 'Electrical Repair' },
  { id: '189', name: 'Inverter Repair', category: 'Appliance Repair' },
  { id: '190', name: 'Chimney Repair', category: 'Appliance Repair' },

  // Healthcare More
  { id: '191', name: 'Dermatologist Consultation', category: 'Healthcare Doctors' },
  { id: '192', name: 'Orthopedist Consultation', category: 'Healthcare Doctors' },
  { id: '193', name: 'Neurologist Consultation', category: 'Healthcare Doctors' },
  { id: '194', name: 'Thyroid Test at Home', category: 'Diagnostics' },
  { id: '195', name: 'Diabetes Test at Home', category: 'Diagnostics' },
  { id: '196', name: 'X-Ray at Home', category: 'Diagnostics' },
  { id: '197', name: 'Home Nursing Service', category: 'Nursing' },
  { id: '198', name: 'Injection at Home', category: 'Nursing' },
  { id: '199', name: 'Patient Care at Home', category: 'Patient Care' },
  { id: '200', name: 'ICU Setup at Home', category: 'Patient Care' },

  // Pharmacy More
  { id: '201', name: 'Medical Equipment Rental', category: 'Pharmacy' },
  { id: '202', name: 'Prescription Medicine Delivery', category: 'Pharmacy' },

  // More for Women, Men, Baby, Elderly
  { id: '203', name: 'Postnatal Care for Women', category: 'Women Healthcare' },
  { id: '204', name: 'Women\'s Spa Package', category: 'Women Beauty' },
  { id: '205', name: 'Men\'s Yoga Trainer', category: 'Men Fitness' },
  { id: '206', name: 'Men\'s Health Checkup', category: 'Men Healthcare' },
  { id: '207', name: 'Baby Massage', category: 'Baby Care' },
  { id: '208', name: 'Baby Nutrition Consultation', category: 'Baby Healthcare' },
  { id: '209', name: 'Elderly Companion Care', category: 'Elderly Care' },
  { id: '210', name: 'Elderly Medication Management', category: 'Elderly Healthcare' },

  // Oxygen & Medical Support
  { id: '211', name: 'Oxygen Cylinder Rental at Home', category: 'Healthcare' },
  { id: '212', name: 'Ventilator Support at Home', category: 'Healthcare' },
  // ================= EXPANDED INSTALLATION SERVICES =================
  { id: '213', name: 'Modular Kitchen Installation', category: 'Installation' },
  { id: '214', name: 'Kitchen Chimney Installation', category: 'Installation' },
  { id: '215', name: 'Gas Stove / Hob Installation', category: 'Installation' },
  { id: '216', name: 'Dishwasher Installation', category: 'Installation' },
  { id: '217', name: 'Oven / OTG Installation', category: 'Installation' },
  { id: '218', name: 'RO Water Purifier Installation', category: 'Installation' },
  { id: '219', name: 'Exhaust Fan / Chimney Ducting', category: 'Installation' },
  { id: '220', name: 'Curtain Rod / Blinds Installation', category: 'Installation' },
  { id: '221', name: 'Solar Water Heater Installation', category: 'Installation' },
  { id: '222', name: 'Wardrobe / Almirah Installation', category: 'Installation' },
  { id: '223', name: 'False Ceiling Installation', category: 'Installation' },
  { id: '224', name: 'UPS / Battery Installation', category: 'Installation' },
];