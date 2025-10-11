import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { regCrudTool } from '../tools/db_crud.js';
import { regFlowSearchTool } from '../tools/flow_hybrid_search.js';
import { regLifecycleModelSearchTool } from '../tools/life_cycle_model_hybrid_search.js';
import { regProcessSearchTool } from '../tools/process_hybrid_search.js';
import { SupabaseSessionPayload } from './auth_middleware.js';

export function initializeServer(
  bearerKey?: string,
  supabaseSession?: SupabaseSessionPayload,
): McpServer {
  const server = new McpServer({
    name: 'TianGong-LCA-MCP-Server',
    version: '1.0.0',
  });

  regFlowSearchTool(server, bearerKey);
  regProcessSearchTool(server, bearerKey);
  regLifecycleModelSearchTool(server, bearerKey);
  regCrudTool(server, supabaseSession ?? bearerKey);

  return server;
}

export function getServer(bearerKey?: string, supabaseSession?: SupabaseSessionPayload): McpServer {
  return initializeServer(bearerKey, supabaseSession);
}
