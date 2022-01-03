import { Router } from "express";
import { AuthClientController } from "../modules/clients/auth/AuthClientController";
import { CreateClientController } from "../modules/clients/useCase/CreateClientController";
import { FindAllDeliveriesController } from "../modules/clients/useCase/FildAllDeliveriesController";
import { FindOneClientController } from "../modules/clients/useCase/FindOneController";
import { CreateDeliveryController } from "../modules/deliveries/controller/CreateDeliveryController";
import { FindAvaliableDeliveryController } from "../modules/deliveries/controller/FindAvaliableDeliveryController";
import { UpdateDeliveryController } from "../modules/deliveries/controller/UpdateDeliveryController";
import { UpdateEndDateController } from "../modules/deliveries/controller/UpdateEndDateController";
import { AuthDeliveryManController } from "../modules/deliveryman/auth/AuthDeliveryManController";
import { CreateDeliveryManController } from "../modules/deliveryman/controller/CreateDeliveryManController";
import { FindOneDeliveryManController } from "../modules/deliveryman/controller/FindOneDeliveryManController";
import { ensureAuthenticateDeliveryman } from "../modules/middlewares/ensureAuthenticateDeliveryman";

export const routes = Router()
const createClientController = new CreateClientController()
const findOneClientController = new FindOneClientController()
const authClientController = new AuthClientController()
const createDeliveryManController = new CreateDeliveryManController()
const findOneDeliveryManController = new FindOneDeliveryManController()
const authDeliveryManController = new AuthDeliveryManController()
const createDeliveryController = new CreateDeliveryController()
const findAvailableController = new FindAvaliableDeliveryController()
const updatedDeliveryController = new UpdateDeliveryController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesManController = new FindAllDeliveriesController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authClientController.handle)
routes.get("/client/:username", findOneClientController.handle)
routes.post("/deliveryman", createDeliveryManController.handle)
routes.get("/deliveryman/:username", findOneDeliveryManController.handle)
routes.post("/deliveryman/authenticate", authDeliveryManController.handle)
routes.post("/delivery", createDeliveryController.handle)
routes.get("/delivery/available", ensureAuthenticateDeliveryman,findAvailableController.handle)
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updatedDeliveryController.handle)
routes.get("/client/deliveries", findAllDeliveriesController.handle)
routes.get("/deliveriesman/delivery", findAllDeliveriesController.handle)
routes.put("/delivery/updateenddate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)
