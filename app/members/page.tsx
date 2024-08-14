"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Members() {
  const [memberData, setMemberData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/members");
      console.log(res.data);
      setMemberData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full max-w-5xl flex flex-row items-center justify-between mx-auto pt-12">
        <h1 className="text-3xl font-bold">Next Crud</h1>
        <Button>Create User</Button>
      </div>
      <div className="w-full max-w-5xl pt-12 flex mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Usia</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberData.map((rs, index) => (
              <TableRow>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{rs.nama}</TableCell>
                <TableCell>{rs.usia}</TableCell>
                <TableCell>{rs.gender}</TableCell>
                <TableCell className="flex flex-row gap-2">
                  <Button variant="secondary">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button variant="destructive">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
