// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'triplit',
  Name: 'Triplit',
  Description: "The Typescript-first database that handles caching and syncing for your app automatically",
  Website: 'https://triplit.dev',
  Deployment: ['Self-hosted', 'Hosted'],
  License: 'GPL3',
  InitialReleaseDate: new Date('2023-07-27'),
  MaturityLevel: 'Production-Ready',
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node', 'Deno', 'Bun', 'Cloudflare Workers', 'Hermes']
    },
    LanguageSDK: { data: ['Typescript'] },
    FrameworkIntegrations: {
      data: ['React', 'Vue', 'Svelte', 'Angular', 'React Native']
    },
    ClientBundleSize: { data: '~70kB (gzip) ' },
  },
  Networking: {
    Protocol: {
      data: ['WebSockets', 'HTTP']
    },
    Topology: { data: 'Client-Server' },
  },
  ServerSideData: {
    PersistenceMechanism: { data: ['SQLite', 'Cloudflare Durable Object Storage', 'Custom'], comment: 'Pluggable with simple Key-Value interface' },
    DataModelParadigm: { data: 'Relational' },
    SchemaManagement: {
      data: ['Derived types', 'Schema migrations', 'Validate schemas on write'],

    }
  },
  ClientSideData: {
    QueryAPI: { data: ['Async', 'Reactive queries'] },
    LocalRefreshLatency: {
      data: '~1ms',
    },
    DataModel: { data: 'Relational' },
    PersistenceMechanism: { data: ['IndexedDB', 'SQLite', 'Custom'], 'comment': 'Adapter for k-v stores.' },
    PersistenceFeatures: { data: 'Transactions' },
    SchemaManagement: {
      data: ['Derived types']
    },
    OfflineReads: {
      data: 'Query Cache',
      comment: 'Subscribed queries have full db support including novel queries'
    },
    'OptimisticUpdates': {
      data: 'Yes'
    },
    OfflineWrites: {
      data: 'Cached offline writes',
    },
    DataSize: {
      data: 'limited by device capabilities'
    },
  },
  SynchronizationStrategy: {
    Authority: {
      data: 'Centralized'
    },
    FullOrPartialReplication: { data: ['Partial Replication'] },
    ConflictHandling: {
      data: 'LWW at the attribute level'
    },
    WhereResolutionOccurs: { data: 'Server' },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'Minimal deltas',
        ServerToClient: 'Normalized query results, depuded across subscriptions then minimal deltas for changes',
      },
    },
  },
  AuthIdentity: {
    AuthenticationMethod: {
      data: ['JWT Tokens']
    },
    AuthorizationPermissions: {
      data: 'Custom mapping from token attributes to query filters'
    }
  },
  DevelopmentWorkflowsDX: {
    CLI: {
      data: 'Yes',
    },
    TypeSupport: {
      data: 'Yes',
    },
    DebuggingTools: {
      data: [
        'DevTools',
        'Network Inspector',
        'Data Inspector',
        'Dashboard'
      ],
    }
  }
})
