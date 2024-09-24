const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/appointments', {
  
});

// Define the Appointment schema and model
const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  partySize: Number,
  service: String,
  immigration: String,
  date: String,
  startTime: String,
  endTime: String,
  notes: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// API endpoint to create a new appointment
app.post('/api/appointments', async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.send(appointment);
});

// API endpoint to get all appointments
app.get('/api/appointments', async (req, res) => {
  const appointments = await Appointment.find();
  res.send(appointments);
});

// Use environment variable for port or default to 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// API endpoint to delete an appointment
app.delete('/api/appointments/:id', async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);
    res.send({ message: 'Appointment deleted' });
  });