/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { UserRepresentation } from './userRepresentation';


export interface TaskRepresentation { 
    assignee?: UserRepresentation;
    caseDefinitionCategory?: string;
    caseDefinitionDeploymentId?: string;
    caseDefinitionDescription?: string;
    caseDefinitionKey?: string;
    caseDefinitionName?: string;
    caseDefinitionVersion?: number;
    caseInstanceName?: string;
    category?: string;
    created?: Date;
    description?: string;
    dueDate?: Date;
    duration?: number;
    endDate?: Date;
    formKey?: string;
    id?: string;
    initiatorCanCompleteTask?: boolean;
    involvedPeople?: Array<UserRepresentation>;
    memberOfCandidateGroup?: boolean;
    memberOfCandidateUsers?: boolean;
    name?: string;
    parentTaskId?: string;
    parentTaskName?: string;
    priority?: number;
    processDefinitionCategory?: string;
    processDefinitionDeploymentId?: string;
    processDefinitionDescription?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionName?: string;
    processDefinitionVersion?: number;
    processInstanceId?: string;
    processInstanceName?: string;
    processInstanceStartUserId?: string;
    scopeDefinitionId?: string;
    scopeId?: string;
    scopeType?: string;
}
