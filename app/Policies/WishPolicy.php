<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Wish;
use Illuminate\Auth\Access\Response;

class WishPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        if (checkAdmin() or checkDonorWisher() or checkWisher()){
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Wish $wish): bool
    {
        if (checkAdmin()){
            return true;
        }elseif (checkDonorWisher() or checkWisher()){
            if ($user->id == $wish->created_by){
                return true;
            }else{
                return $user->id == $wish->user_id;
            }
        }
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if (checkDonorWisher() or checkWisher()){
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Wish $wish): bool
    {
        if (checkAdmin()){
            return true;
        }elseif (checkDonorWisher() or checkWisher()){
            if ($user->id == $wish->created_by){
                return true;
            }else{
                return $user->id == $wish->user_id;
            }
        }
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Wish $wish): bool
    {
        if (checkAdmin()){
            return true;
        }elseif (checkDonorWisher() or checkWisher()){
            if ($user->id == $wish->created_by){
                return true;
            }else{
                return $user->id == $wish->user_id;
            }
        }
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Wish $wish): bool
    {
       return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Wish $wish): bool
    {
        return false;
    }
}
