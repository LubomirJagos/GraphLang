/**
 *  @class GraphLang.Shapes.Basic.RightTunnel
 *  @author Ing. Lubomir Jagos
 *  @description Extended tunnel class, this to differ tunnel when wire LEAVING structure, it means, it's going
 *  from structure into case, loop structure into parent structure (canvas, another parent loop or case structure).
 */
GraphLang.Shapes.Basic.RightTunnel = GraphLang.Shapes.Basic.Tunnel.extend({
    NAME: "GraphLang.Shapes.Basic.RightTunnel"
});
