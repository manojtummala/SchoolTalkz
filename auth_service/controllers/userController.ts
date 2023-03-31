import { instance } from "../lib/axios";
import { Request, Response } from "express";
import {
  changePasswordParams,
  createCreatorParams,
  createOneSchoolUserParams,
  createSchoolTalkzStaffsParams,
  deleteUserParams,
  editMeParams,
  editSchoolTalkzStaffsParams,
  editSchoolUserParams,
  escalatePriviledgeParams,
  escalateStaffPriviledges,
  findUserByRoleParams,
  findUserParams,
  loginParams,
  sendOTPParams,
} from "../schemas/userSchema";
import { sendLoginToken } from "../lib/jwt";
import errorMessage from "../utils/errorMessage";
import {
  deleteFileFromBlobStorage,
  deleteLocalFile,
  uploadFile,
} from "../uploadFiles";

export async function allUsers(req: Request, res: Response) {
  instance
    .get("/allUsers")
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function createSchoolTalkzStaff(req: Request, res: Response) {
  // console.log(req.file);
  let profile_pic: string = "";
  try {
    if (req.file) {
      const response = await uploadFile(req.file.path);
      if (response.error === "") {
        profile_pic = response.message;
      } else {
        res.status(500).send(errorMessage(response.error));
        return;
      }
    }
  } catch (err) {
    res.status(500).send(errorMessage(err));
    return;
  }
  const checkParam = createSchoolTalkzStaffsParams.safeParse({
    ...req.body,
    profile_pic,
  });
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("createSchoolTalkzStaff", { ...req.body, profile_pic })
    .then(function (response) {
      if (req.file) deleteLocalFile(req.file.path);
      if (response.status === 200) {
        res.status(200).send({ message: response.data });
        return;
      }
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      res.status(500).send({ message: response.data });
      return;
    })
    .catch(function (error) {
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function escalateSchoolTalkzStaffPriviledge(
  req: Request,
  res: Response
) {
  const checkParam = escalatePriviledgeParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/editSchoolTalkzStaff", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function login(req: Request, res: Response) {
  const checkParam = loginParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/verifyUser", req.body)
    .then(function (response) {
      if (response.data.message === "user can login") {
        sendLoginToken(response.data.user, 200, res);
      } else {
        res.status(200).send(errorMessage("cannot login"));
      }
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function sendOTP(req: Request, res: Response) {
  const checkParam = sendOTPParams.safeParse({...req.body, subdomain: req.subdomain});
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/sendOTP", {...req.body, subdomain: req.subdomain})
    .then(function (response) {
      if (response.data === "OTP sent") {
        res.status(200).send({ message: "OTP sent" });
      } else {
        res.status(200).send(errorMessage(response.data));
      }
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function verifyOTP(req: Request, res: Response) {
  const checkParam = sendOTPParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/verifyOTP", req.body)
    .then(function (response) {
      if (response.data.message === "user can login") {
        sendLoginToken(response.data.user, 200, res);
      } else {
        res.status(200).send(errorMessage(response.data.message));
      }
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function logout(req: Request, res: Response) {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (err) {
    res.status(206).send(errorMessage("Cannot logout"));
  }
}

export async function findUserByRole(req: Request, res: Response) {
  const checkParam = findUserByRoleParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/findUserByRole", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function findUser(req: Request, res: Response) {
  const checkParam = findUserParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/findUser", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function deleteUser(req: Request, res: Response) {
  const checkParam = deleteUserParams.safeParse({
    userId: req.user?.data?.id,
  });
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  // console.log(req.user.data)
  instance
    .post("/deleteUser", { userId: req.user?.data.id })
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function createOneStudent(req: Request, res: Response) {
  // console.log(req.file)

  let profile_pic: string = "";
  try {
    if (req.file) {
      const response = await uploadFile(req.file.path);
      if (response.error === "") {
        profile_pic = response.message;
      } else {
        res.status(500).send(errorMessage(response.error));
        return;
      }
    }
  } catch (err) {
    res.status(500).send(errorMessage(err));
    return;
  }

  const checkParam = createOneSchoolUserParams.safeParse({
    ...req.body,
    schoolId: req.user.data.id,
    profile_pic,
  });
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  req.body.isStudent = true;
  instance
    .post("/createSchoolUser", {
      ...req.body,
      schoolId: req.user.data.id,
      profile_pic,
    })
    .then(function (response) {
      if (req.file) deleteLocalFile(req.file.path);
      if (response.status === 200) {
        res.status(200).send({ message: response.data });
        return;
      }
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      res.status(500).send({ message: response.data });
      return;
    })
    .catch(function (error) {
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function createOneStaff(req: Request, res: Response) {
  // console.log(req.file)
  let profile_pic: string = "";
  try {
    if (req.file) {
      const response = await uploadFile(req.file.path);
      if (response.error === "") {
        profile_pic = response.message;
      } else {
        res.status(500).send(errorMessage(response.error));
        return;
      }
    }
  } catch (err) {
    res.status(500).send(errorMessage(err));
    return;
  }
  const checkParam = createOneSchoolUserParams.safeParse({
    ...req.body,
    schoolId: req.user.data.id,
    profile_pic
  });
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  req.body.isStudent = false;
  instance
    .post("/createSchoolUser", {
      ...req.body,
      schoolId: req.user.data.id,
      profile_pic
    })
    .then(function (response) {
      if (req.file) deleteLocalFile(req.file.path);
      if (response.status === 200) {
        res.status(200).send({ message: response.data });
        return;
      }
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      res.status(500).send({ message: response.data });
      return;
    })
    .catch(function (error) {
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function createCreator(req: Request, res: Response) {
  // console.log(req.file)
  let profile_pic: string = "";
  try {
    if (req.file) {
      const response = await uploadFile(req.file.path);
      if (response.error === "") {
        profile_pic = response.message;
      } else {
        res.status(500).send(errorMessage(response.error));
        return;
      }
    }
  } catch (err) {
    res.status(500).send(errorMessage(err));
    return;
  }
  const checkParam = createCreatorParams.safeParse({...req.body, profile_pic});
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/createCreator", {...req.body, profile_pic})
    .then(function (response) {
      if (req.file) deleteLocalFile(req.file.path);
      if (response.status === 200) {
        res.status(200).send({ message: response.data });
        return;
      }
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      res.status(500).send({ message: response.data });
      return;
    })
    .catch(function (error) {
      if (profile_pic !== "") deleteFileFromBlobStorage(profile_pic);
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function editSchoolUser(req: Request, res: Response) {
  const checkParam = editSchoolUserParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/editSchoolUser", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function escalteSchoolUserPrivileges(req: Request, res: Response) {
  const checkParam = escalateStaffPriviledges.safeParse(req.body);
  instance
    .post("/editSchoolUser", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function editSchoolTalkzStaff(req: Request, res: Response) {
  const checkParam = editSchoolTalkzStaffsParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/editSchoolTalkzStaff", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function changePassword(req: Request, res: Response) {
  const checkParam = changePasswordParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/findUser", { userId: req.user.data.id })
    .then(function (response) {
      if (response.data.user_type === undefined) {
        res
          .status(500)
          .send(errorMessage("user not found: something is wrong"));
        return;
      }
      req.body.userId = req.user.data.id;
      const user_type = response.data?.user_type;
      if (user_type === "school_user") {
        instance
          .post("/editSchoolUser", req.body)
          .then(function (response) {
            res.status(200).send({ message: response.data });
            return;
          })
          .catch(function (error) {
            console.log(error);
            res.status(500).send({ error: error });
            return;
          });
      }
      if (user_type === "creator") {
        instance
          .post("/editCreator", req.body)
          .then(function (response) {
            res.status(200).send({ message: response.data });
            return;
          })
          .catch(function (error) {
            console.log(error);
            res.status(500).send({ error: error });
            return;
          });
      }
      if (user_type === "schooltalkz_staff") {
        instance
          .post("/editSchoolTalkzStaff", req.body)
          .then(function (response) {
            res.status(200).send({ message: response.data });
            return;
          })
          .catch(function (error) {
            console.log(error);
            res.status(500).send({ error: error });
            return;
          });
      }
      res.status(500).send(errorMessage("Something went wrong"));
      return;
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function me(req: Request, res: Response) {
  if (req.user.data.id === undefined) {
    res.status(500).send(errorMessage("Please login first"));
  }
  instance
    .post("/findUser", { userId: req.user.data.id })
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}

export async function editMe(req: Request, res: Response) {
  const checkParam = editMeParams.safeParse({
    ...req.body,
    userId: req.user.data.id,
  });
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/editSchoolUser", {
      ...req.body,
      userId: req.user.data.id,
    })
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send({ error: error });
    });
}
