/**
 * @publicApi
 */
export enum Scope {
  /**
   * The provider can be shared across multiple classes. The provider lifetime
   * is strictly tied to the application lifecycle. Once the application has
   * bootstrapped, all providers have been instantiated.
   */
  // 共享实例，在程序启动的时候，就实例化了，并且一直到程序结束而跟着销毁
  DEFAULT,
  /**
   * A new private instance of the provider is instantiated for every use
   */
  // Scope.TRANSIENT：表示每次调用时都会创建一个新的实例。无论是在同一请求还是不同请求中多次使用相同依赖，都会得到不同的实例。适合那些不需要保持状态或数据共享，并且希望获得全新实例的情况。
  TRANSIENT,
  /**
   * A new instance is instantiated for each request processing pipeline
   */
  // Scope.REQUEST：表示每个 HTTP 请求都会创建一个新的实例。这意味着在同一个请求中多次使用相同的依赖时，每次都会得到不同的实例。适合那些需要在每个请求中保持独立状态或数据的情况。
  REQUEST,
}

/**
 * @publicApi
 *
 * @see [Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
 */
export interface ScopeOptions {
  /**
   * Specifies the lifetime of an injected Provider or Controller.
   */
  scope?: Scope;
  /**
   * Flags provider as durable. This flag can be used in combination with custom context id
   * factory strategy to construct lazy DI subtrees.
   *
   * This flag can be used only in conjunction with scope = Scope.REQUEST.
   */
  durable?: boolean;
}
