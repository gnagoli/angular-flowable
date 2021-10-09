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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AddGroupPrivilegeRepresentation } from '../model/addGroupPrivilegeRepresentation';
import { AddUserPrivilegeRepresentation } from '../model/addUserPrivilegeRepresentation';
import { GroupRepresentation } from '../model/groupRepresentation';
import { PrivilegeRepresentation } from '../model/privilegeRepresentation';
import { UserRepresentation } from '../model/userRepresentation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IdmPrivilegesResourceService {

    protected basePath = 'https://localhost:8081';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * addGroupPrivilege
     *
     * @param privilegeId privilegeId
     * @param representation representation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addGroupPrivilege(privilegeId: string, representation: AddGroupPrivilegeRepresentation, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addGroupPrivilege(privilegeId: string, representation: AddGroupPrivilegeRepresentation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addGroupPrivilege(privilegeId: string, representation: AddGroupPrivilegeRepresentation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addGroupPrivilege(privilegeId: string, representation: AddGroupPrivilegeRepresentation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling addGroupPrivilege.');
        }

        if (representation === null || representation === undefined) {
            throw new Error('Required parameter representation was null or undefined when calling addGroupPrivilege.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}/groups`,
            representation,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * addUserPrivilege
     *
     * @param privilegeId privilegeId
     * @param representation representation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUserPrivilege(privilegeId: string, representation: AddUserPrivilegeRepresentation, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addUserPrivilege(privilegeId: string, representation: AddUserPrivilegeRepresentation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addUserPrivilege(privilegeId: string, representation: AddUserPrivilegeRepresentation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addUserPrivilege(privilegeId: string, representation: AddUserPrivilegeRepresentation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling addUserPrivilege.');
        }

        if (representation === null || representation === undefined) {
            throw new Error('Required parameter representation was null or undefined when calling addUserPrivilege.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}/users`,
            representation,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteGroupPrivilege
     *
     * @param privilegeId privilegeId
     * @param groupId groupId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGroupPrivilege(privilegeId: string, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteGroupPrivilege(privilegeId: string, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteGroupPrivilege(privilegeId: string, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteGroupPrivilege(privilegeId: string, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling deleteGroupPrivilege.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling deleteGroupPrivilege.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteUserPrivilege
     *
     * @param privilegeId privilegeId
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUserPrivilege(privilegeId: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUserPrivilege(privilegeId: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUserPrivilege(privilegeId: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUserPrivilege(privilegeId: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling deleteUserPrivilege.');
        }

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteUserPrivilege.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}/users/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getGroups
     *
     * @param privilegeId privilegeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroups(privilegeId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GroupRepresentation>>;
    public getGroups(privilegeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GroupRepresentation>>>;
    public getGroups(privilegeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GroupRepresentation>>>;
    public getGroups(privilegeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling getGroups.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<GroupRepresentation>>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}/groups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPrivilege
     *
     * @param privilegeId privilegeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPrivilege(privilegeId: string, observe?: 'body', reportProgress?: boolean): Observable<PrivilegeRepresentation>;
    public getPrivilege(privilegeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PrivilegeRepresentation>>;
    public getPrivilege(privilegeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PrivilegeRepresentation>>;
    public getPrivilege(privilegeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling getPrivilege.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<PrivilegeRepresentation>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPrivileges
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPrivileges(observe?: 'body', reportProgress?: boolean): Observable<Array<PrivilegeRepresentation>>;
    public getPrivileges(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PrivilegeRepresentation>>>;
    public getPrivileges(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PrivilegeRepresentation>>>;
    public getPrivileges(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<PrivilegeRepresentation>>(`${this.basePath}/rest/admin/privileges`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUsers
     *
     * @param privilegeId privilegeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsers(privilegeId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<UserRepresentation>>;
    public getUsers(privilegeId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserRepresentation>>>;
    public getUsers(privilegeId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserRepresentation>>>;
    public getUsers(privilegeId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (privilegeId === null || privilegeId === undefined) {
            throw new Error('Required parameter privilegeId was null or undefined when calling getUsers.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<UserRepresentation>>(`${this.basePath}/rest/admin/privileges/${encodeURIComponent(String(privilegeId))}/users`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}