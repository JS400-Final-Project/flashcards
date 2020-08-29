const { Router } = require("express");
const router = Router();
const setDAO = require("../daos/set");
const userDAO = require("../daos/user");
const secret = "shhhhhh do not tell anyone this secret";
const jwt = require("jsonwebtoken");

const authorizationCheck = async (req, res, next) => {
  let header = req.headers.authorization;
  if (!header) {
    res.sendStatus(401);
  } else {
    const token = header.split(" ")[1];
    const userCheck = jwt.verify(token, secret, (e, tokenNew) => {
      if (e) {
        res.sendStatus(401);
      } else {
        res.locals.user = tokenNew;
        next();
      }
    });
  }
  return;
};

router.post("/", authorizationCheck, async (req, res, next) => {
  const { title, description, category, userId } = req.body;
  const set = await setDAO.create(title, description, category, userId);
  if (set) {
    res.json(set);
  } else {
    res.sendStatus(401);
  }
});
// GET set of one user.
router.get("/user/:userid", authorizationCheck, async (req, res, next) => {
  const userid = req.params.userid;
  if (
    res.locals.user.roles.includes("admin") ||
    res.locals.user._id == userid
  ) {
    const set = await setDAO.getSetsByUserId(userid);

    if (set) {
      res.json(set);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(401);
  }
}); // GET public sets

router.get("/public", authorizationCheck, async (req, res, next) => {
  const number = req.query.number;
  const set = await setDAO.getPublic(number);

  if (set) {
    res.json(set);
  } else {
    res.sendStatus(404);
  }
});

// Update metadata of set
router.put("/:id", authorizationCheck, async (req, res, next) => {
  const setId = req.params.id;
  const { title, description, category } = req.body;
  const set = await setDAO.updateSetById(
    setId,
    title,
    description,
    category,
    res.locals.user
  );
  if (set) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});
// Change public status of set
router.put("/:id/public", async (req, res, next) => {
  const isPublic = req.query.isPublic;
  const setId = req.params.id;
  const { userId } = req.body;

  const set = await setDAO.makePublic(setId, userId, isPublic);
  if (set) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});
// GET single set
router.get("/:id", async (req, res, next) => {
  const set = await setDAO.getById(req.params.id);
  if (set) {
    res.json(set);
  } else {
    res.sendStatus(404);
  }
});

// PUT single set
router.put("/:id/start", async (req, res, next) => {
  const set = await setDAO.getById(req.params.id);
  if (set) {
    const setAttempts = set.setAttempts;
    const setAdded = setDAO.startById(req.params.id, setAttempts);
    if (setAdded) {
      res.json(setAdded);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(404);
  }
});

// Delete
router.delete("/:id", async (req, res, next) => {
  const setId = req.params.id;
  try {
    const success = await setDAO.deleteById(setId);
    res.sendStatus(success ? 200 : 400);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = router;
