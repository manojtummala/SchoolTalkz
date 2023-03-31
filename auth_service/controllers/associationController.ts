// TODO: disociate into class and staff_room

import { instance } from "../lib/axios";
import { Request, Response } from "express";
import {
  createAssociationParams,
  deleteAssociationParams,
  editAssociationParams,
} from "../schemas/associationSchema";

export async function allAssociations(req: Request, res: Response) {
  instance
    .get("/allAssociations")
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function createClass(req: Request, res: Response) {
  const data = {
    ...req.body,
    isClass: true,
    schoolId: req.user.data.id,
  };

  const checkParam = createAssociationParams.safeParse(data);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }

  instance
    .post("/createAssociation", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}
export async function createStaffRoom(req: Request, res: Response) {
  const data = {
    ...req.body,
    isClass: false,
    schoolId: req.user.data.id,
    mapped_to: undefined,
  };

  const checkParam = createAssociationParams.safeParse(data);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }

  instance
    .post("/createAssociation", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function findAssociation(req: Request, res: Response) {
  instance
    .post("/findAssociation", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function editAssociation(req: Request, res: Response) {
  const checkParam = editAssociationParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/editAssociation", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}

export async function deleteAssociation(req: Request, res: Response) {
  const checkParam = deleteAssociationParams.safeParse({
    ...req.body,
    schoolId: req.user.data.id,
  });
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/deleteAssociation", {
      ...req.body,
      schoolId: req.user.data.id,
    })
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
}
