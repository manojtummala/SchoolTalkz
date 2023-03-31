import { instance } from "../lib/axios";
import { Request, Response } from "express";
import { changeSchoolStatusParams, createSchoolParams, editSchoolParams } from "../schemas/schoolSchema";

export async function allSchools(req: Request, res: Response) {
  instance
    .get("/allSchools")
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function createSchool(req: Request, res: Response) {
  const checkParam = createSchoolParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/createSchool", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function findSchools(req: Request, res: Response) {
  instance
    .post("/findSchools", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function editSchool(req: Request, res: Response) {
  const checkParam = editSchoolParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/editSchool", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function changeSchoolStatus(req: Request, res: Response) {
  const checkParam = changeSchoolStatusParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/editSchool", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

// TODO: Change password, Login school
