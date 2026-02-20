import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import './subjects.css';

const Subjects = () => {

  const [subject, setSubject] = useState("");
  const [allSubject, setAllSubject] = useState([]);
  const { setIsLogin } = useUser();
  const navigate = useNavigate();

  async function getAllSub() {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.get(
        'http://localhost:3000/api/std/subject/allsubject',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setIsLogin(true);
      setAllSubject(res.data.allSubjects);

    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
      localStorage.removeItem('token');
      navigate('/');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subject.trim()) return;

    try {
      const token = localStorage.getItem('token');

      const res = await axios.post(
        'http://localhost:3000/api/std/subject/add',
        { subject },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(res.data.message);
      setSubject("");
      getAllSub();

    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
      setSubject("");
    }
  }

  const handleRemove = async (id) => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.delete(
        `http://localhost:3000/api/std/subject/remove/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(res.data.message);
      getAllSub();

    } catch (error) {
      toast.error(error.response?.data?.message || "Error");
    }
  }

  useEffect(() => {
    getAllSub();
  }, []);

  return (
    <div className="subjects-wrapper">

      <div className="subjects-card">
        <h1 className="title">Subjects</h1>

        <form className="subject-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={subject}
            placeholder="Enter subject name"
            onChange={(e) => setSubject(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <ul className="subject-list">
          {allSubject.map((s) => (
            <li key={s._id} className="subject-item">
              <span>{s.subject}</span>
              <button
                className="remove-btn"
                onClick={() => handleRemove(s._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Subjects;