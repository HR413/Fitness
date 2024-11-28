import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    caloriesBurned: {
      type: Number,
    },
    date: {
      type: Date,
      default: () => {
        // Use a function to strip the time component from the current date
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), today.getDate());
      },
      set: (value) => {
        // Ensure only the date part is stored when setting a custom value
        return new Date(value.getFullYear(), value.getMonth(), value.getDate());
      },
    },
  },
  { timestamps: true }
);

WorkoutSchema.index({ workoutName: 1, date: 1 }, { unique: true });

export default mongoose.model("Workout", WorkoutSchema);
