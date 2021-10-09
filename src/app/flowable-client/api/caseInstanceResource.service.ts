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

import { CaseInstanceRepresentation } from '../model/caseInstanceRepresentation';
import { FormModelRepresentation } from '../model/formModelRepresentation';
import { ResultListDataRepresentation } from '../model/resultListDataRepresentation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CaseInstanceResourceService {

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
     * deleteCaseInstance
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCaseInstance(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCaseInstance(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCaseInstance(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCaseInstance(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling deleteCaseInstance.');
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

        return this.httpClient.delete<any>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceActiveStages
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceActiveStages(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceActiveStages(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceActiveStages(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceActiveStages(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceActiveStages.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/active-stages`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceAvailableMilestones
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceAvailableMilestones(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceAvailableMilestones(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceAvailableMilestones(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceAvailableMilestones(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceAvailableMilestones.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/available-milestones`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceAvailableUserEventListeners
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceAvailableUserEventListeners(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceAvailableUserEventListeners(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceAvailableUserEventListeners(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceAvailableUserEventListeners(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceAvailableUserEventListeners.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/available-user-event-listeners`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceCompletedUserEventListeners
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceCompletedUserEventListeners(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceCompletedUserEventListeners(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceCompletedUserEventListeners(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceCompletedUserEventListeners(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceCompletedUserEventListeners.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/completed-user-event-listeners`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceEnabledPlanItemInstances
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceEnabledPlanItemInstances(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceEnabledPlanItemInstances(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceEnabledPlanItemInstances(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceEnabledPlanItemInstances(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceEnabledPlanItemInstances.');
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

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/enabled-planitem-instances`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceEndedMilestones
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceEndedMilestones(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceEndedMilestones(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceEndedMilestones(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceEndedMilestones(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceEndedMilestones.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/ended-milestones`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceEndedStages
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceEndedStages(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<ResultListDataRepresentation>;
    public getCaseInstanceEndedStages(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultListDataRepresentation>>;
    public getCaseInstanceEndedStages(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultListDataRepresentation>>;
    public getCaseInstanceEndedStages(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceEndedStages.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResultListDataRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/ended-stages`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstanceStartForm
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstanceStartForm(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<FormModelRepresentation>;
    public getCaseInstanceStartForm(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FormModelRepresentation>>;
    public getCaseInstanceStartForm(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FormModelRepresentation>>;
    public getCaseInstanceStartForm(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstanceStartForm.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<FormModelRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/start-form`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseInstance
     *
     * @param caseInstanceId caseInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseInstance(caseInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<CaseInstanceRepresentation>;
    public getCaseInstance(caseInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CaseInstanceRepresentation>>;
    public getCaseInstance(caseInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CaseInstanceRepresentation>>;
    public getCaseInstance(caseInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling getCaseInstance.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<CaseInstanceRepresentation>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * startEnabledPlanItemInstance
     *
     * @param caseInstanceId caseInstanceId
     * @param planItemInstanceId planItemInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public startEnabledPlanItemInstance(caseInstanceId: string, planItemInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public startEnabledPlanItemInstance(caseInstanceId: string, planItemInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public startEnabledPlanItemInstance(caseInstanceId: string, planItemInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public startEnabledPlanItemInstance(caseInstanceId: string, planItemInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling startEnabledPlanItemInstance.');
        }

        if (planItemInstanceId === null || planItemInstanceId === undefined) {
            throw new Error('Required parameter planItemInstanceId was null or undefined when calling startEnabledPlanItemInstance.');
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

        return this.httpClient.post<any>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/enabled-planitem-instances/${encodeURIComponent(String(planItemInstanceId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * triggerUserEventListener
     *
     * @param caseInstanceId caseInstanceId
     * @param userEventListenerId userEventListenerId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public triggerUserEventListener(caseInstanceId: string, userEventListenerId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public triggerUserEventListener(caseInstanceId: string, userEventListenerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public triggerUserEventListener(caseInstanceId: string, userEventListenerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public triggerUserEventListener(caseInstanceId: string, userEventListenerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caseInstanceId === null || caseInstanceId === undefined) {
            throw new Error('Required parameter caseInstanceId was null or undefined when calling triggerUserEventListener.');
        }

        if (userEventListenerId === null || userEventListenerId === undefined) {
            throw new Error('Required parameter userEventListenerId was null or undefined when calling triggerUserEventListener.');
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

        return this.httpClient.post<any>(`${this.basePath}/app/rest/case-instances/${encodeURIComponent(String(caseInstanceId))}/trigger-user-event-listener/${encodeURIComponent(String(userEventListenerId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
