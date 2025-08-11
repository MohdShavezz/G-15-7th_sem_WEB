// Relationship Summary:-
// A Department has many Doctors.
// A Doctor can have many Appointments.
// A Patient can book many Appointments.
// Each Appointment links a Doctor and a Patient.

const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  floor: {
    type: Number,
    required: true,
    min: 1
  },
  head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }
});

departmentSchema.methods.getDoctors = function() {
  return mongoose.model('Doctor').find({ department: this._id });
};

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;

// --------------------------------------------------------------------

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true,
    enum: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'General']
  },
  phone: {
    type: String,
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `${props.value} is not a valid phone number!`
    },
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  joiningDate: {
    type: Date,
    default: Date.now
  }
});

// Static method
doctorSchema.statics.findBySpecialization = function(specialization) {
  return this.find({ specialization });
};

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;

// ----------------------------------------------------------------------

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  contactInfo: {
    phone: {
      type: String,
      required: true,
      validate: {
        validator: v => /^\d{10}$/.test(v),
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    email: {
      type: String,
      lowercase: true,
      validate: {
        validator: v => /\S+@\S+\.\S+/.test(v),
        message: props => `${props.value} is not a valid email!`
      }
    },
    address: String
  },
  medicalHistory: [String],
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

patientSchema.methods.addHistory = function(record) {
  this.medicalHistory.push(record);
  return this.save();
};

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;

// --------------------------------------------------------------------

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

appointmentSchema.statics.findUpcoming = function() {
  return this.find({ appointmentDate: { $gte: new Date() }, status: 'Scheduled' })
    .populate('patient doctor');
};

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
