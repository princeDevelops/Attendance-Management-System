import pool from "../config/db.js";

export const createSession = async (sessionData) => {
  const {
    session_datetime,
    duration_minutes,
    batch_id,
    faculty_id,
    subject_id,
    session_type,
    location_id,
    status,
    notes,
  } = sessionData;

  const query = `INSERT INTO sessions (
        session_datetime,
        duration_minutes,
        batch_id,
        faculty_id,
        subject_id,
        session_type,
        location_id,
        status,
        notes )

        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
        RETURNING *;
    `;

  const values = [
    session_datetime,
    duration_minutes,
    batch_id,
    faculty_id,
    subject_id,
    session_type,
    location_id,
    status || "scheduled",
    notes || null,
  ];

  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const fetchSessions = async () => {
  const { rows } = await pool.query("SELECT * FROM sessions");
  return rows;
};
