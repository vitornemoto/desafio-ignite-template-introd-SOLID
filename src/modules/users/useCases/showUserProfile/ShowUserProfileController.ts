import { Request, Response } from "express";
import { stringify } from "uuid";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.showUserProfileUseCase.execute({
      user_id: String(user_id),
    });

    return response.json(user);
  }
}

export { ShowUserProfileController };
