
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FoodCategory
 * 
 */
export type FoodCategory = $Result.DefaultSelection<Prisma.$FoodCategoryPayload>
/**
 * Model UserFavorCategory
 * 
 */
export type UserFavorCategory = $Result.DefaultSelection<Prisma.$UserFavorCategoryPayload>
/**
 * Model Local
 * 
 */
export type Local = $Result.DefaultSelection<Prisma.$LocalPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionState
 * 
 */
export type MissionState = $Result.DefaultSelection<Prisma.$MissionStatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodCategory`: Exposes CRUD operations for the **FoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCategories
    * const foodCategories = await prisma.foodCategory.findMany()
    * ```
    */
  get foodCategory(): Prisma.FoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavorCategory`: Exposes CRUD operations for the **UserFavorCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavorCategories
    * const userFavorCategories = await prisma.userFavorCategory.findMany()
    * ```
    */
  get userFavorCategory(): Prisma.UserFavorCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.local`: Exposes CRUD operations for the **Local** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locals
    * const locals = await prisma.local.findMany()
    * ```
    */
  get local(): Prisma.LocalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionState`: Exposes CRUD operations for the **MissionState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionStates
    * const missionStates = await prisma.missionState.findMany()
    * ```
    */
  get missionState(): Prisma.MissionStateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    FoodCategory: 'FoodCategory',
    UserFavorCategory: 'UserFavorCategory',
    Local: 'Local',
    Store: 'Store',
    Review: 'Review',
    Mission: 'Mission',
    MissionState: 'MissionState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "foodCategory" | "userFavorCategory" | "local" | "store" | "review" | "mission" | "missionState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FoodCategory: {
        payload: Prisma.$FoodCategoryPayload<ExtArgs>
        fields: Prisma.FoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findMany: {
            args: Prisma.FoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          create: {
            args: Prisma.FoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          createMany: {
            args: Prisma.FoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          update: {
            args: Prisma.FoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodCategory>
          }
          groupBy: {
            args: Prisma.FoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      UserFavorCategory: {
        payload: Prisma.$UserFavorCategoryPayload<ExtArgs>
        fields: Prisma.UserFavorCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavorCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavorCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserFavorCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavorCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          findMany: {
            args: Prisma.UserFavorCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>[]
          }
          create: {
            args: Prisma.UserFavorCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          createMany: {
            args: Prisma.UserFavorCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFavorCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          update: {
            args: Prisma.UserFavorCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserFavorCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavorCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFavorCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserFavorCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavorCategory>
          }
          groupBy: {
            args: Prisma.UserFavorCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavorCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavorCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavorCategoryCountAggregateOutputType> | number
          }
        }
      }
      Local: {
        payload: Prisma.$LocalPayload<ExtArgs>
        fields: Prisma.LocalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          findFirst: {
            args: Prisma.LocalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          findMany: {
            args: Prisma.LocalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>[]
          }
          create: {
            args: Prisma.LocalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          createMany: {
            args: Prisma.LocalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          update: {
            args: Prisma.LocalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          deleteMany: {
            args: Prisma.LocalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalPayload>
          }
          aggregate: {
            args: Prisma.LocalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocal>
          }
          groupBy: {
            args: Prisma.LocalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalCountArgs<ExtArgs>
            result: $Utils.Optional<LocalCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionState: {
        payload: Prisma.$MissionStatePayload<ExtArgs>
        fields: Prisma.MissionStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>
          }
          findFirst: {
            args: Prisma.MissionStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>
          }
          findMany: {
            args: Prisma.MissionStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>[]
          }
          create: {
            args: Prisma.MissionStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>
          }
          createMany: {
            args: Prisma.MissionStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>
          }
          update: {
            args: Prisma.MissionStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>
          }
          deleteMany: {
            args: Prisma.MissionStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionStatePayload>
          }
          aggregate: {
            args: Prisma.MissionStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionState>
          }
          groupBy: {
            args: Prisma.MissionStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionStateCountArgs<ExtArgs>
            result: $Utils.Optional<MissionStateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    foodCategory?: FoodCategoryOmit
    userFavorCategory?: UserFavorCategoryOmit
    local?: LocalOmit
    store?: StoreOmit
    review?: ReviewOmit
    mission?: MissionOmit
    missionState?: MissionStateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userFavorCategories: number
    reviews: number
    missionStates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | UserCountOutputTypeCountUserFavorCategoriesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    missionStates?: boolean | UserCountOutputTypeCountMissionStatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavorCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMissionStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionStateWhereInput
  }


  /**
   * Count Type FoodCategoryCountOutputType
   */

  export type FoodCategoryCountOutputType = {
    userFavorCategories: number
  }

  export type FoodCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | FoodCategoryCountOutputTypeCountUserFavorCategoriesArgs
  }

  // Custom InputTypes
  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategoryCountOutputType
     */
    select?: FoodCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeCountUserFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavorCategoryWhereInput
  }


  /**
   * Count Type LocalCountOutputType
   */

  export type LocalCountOutputType = {
    stores: number
  }

  export type LocalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | LocalCountOutputTypeCountStoresArgs
  }

  // Custom InputTypes
  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalCountOutputType
     */
    select?: LocalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    reviews: number
    missions: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | StoreCountOutputTypeCountReviewsArgs
    missions?: boolean | StoreCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    missionStates: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missionStates?: boolean | MissionCountOutputTypeCountMissionStatesArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountMissionStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionStateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    gender: string | null
    birth: Date | null
    address: string | null
    detailAddress: string | null
    phoneNumber: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    gender: string | null
    birth: Date | null
    address: string | null
    detailAddress: string | null
    phoneNumber: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    gender: number
    birth: number
    address: number
    detailAddress: number
    phoneNumber: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    phoneNumber?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    phoneNumber?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    phoneNumber?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    gender: string
    birth: Date
    address: string
    detailAddress: string | null
    phoneNumber: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    detailAddress?: boolean
    phoneNumber?: boolean
    userFavorCategories?: boolean | User$userFavorCategoriesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    missionStates?: boolean | User$missionStatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    detailAddress?: boolean
    phoneNumber?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "gender" | "birth" | "address" | "detailAddress" | "phoneNumber", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | User$userFavorCategoriesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    missionStates?: boolean | User$missionStatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userFavorCategories: Prisma.$UserFavorCategoryPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      missionStates: Prisma.$MissionStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      gender: string
      birth: Date
      address: string
      detailAddress: string | null
      phoneNumber: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFavorCategories<T extends User$userFavorCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$userFavorCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missionStates<T extends User$missionStatesArgs<ExtArgs> = {}>(args?: Subset<T, User$missionStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly detailAddress: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userFavorCategories
   */
  export type User$userFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    where?: UserFavorCategoryWhereInput
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    cursor?: UserFavorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.missionStates
   */
  export type User$missionStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    where?: MissionStateWhereInput
    orderBy?: MissionStateOrderByWithRelationInput | MissionStateOrderByWithRelationInput[]
    cursor?: MissionStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionStateScalarFieldEnum | MissionStateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FoodCategory
   */

  export type AggregateFoodCategory = {
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  export type FoodCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodCategorySumAggregateOutputType = {
    id: number | null
  }

  export type FoodCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FoodCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FoodCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FoodCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FoodCategorySumAggregateInputType = {
    id?: true
  }

  export type FoodCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FoodCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FoodCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategory to aggregate.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCategories
    **/
    _count?: true | FoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type GetFoodCategoryAggregateType<T extends FoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCategory[P]>
      : GetScalarType<T[P], AggregateFoodCategory[P]>
  }




  export type FoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
    orderBy?: FoodCategoryOrderByWithAggregationInput | FoodCategoryOrderByWithAggregationInput[]
    by: FoodCategoryScalarFieldEnum[] | FoodCategoryScalarFieldEnum
    having?: FoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCategoryCountAggregateInputType | true
    _avg?: FoodCategoryAvgAggregateInputType
    _sum?: FoodCategorySumAggregateInputType
    _min?: FoodCategoryMinAggregateInputType
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type FoodCategoryGroupByOutputType = {
    id: number
    name: string
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  type GetFoodCategoryGroupByPayload<T extends FoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userFavorCategories?: boolean | FoodCategory$userFavorCategoriesArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodCategory"]>



  export type FoodCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["foodCategory"]>
  export type FoodCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | FoodCategory$userFavorCategoriesArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodCategory"
    objects: {
      userFavorCategories: Prisma.$UserFavorCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["foodCategory"]>
    composites: {}
  }

  type FoodCategoryGetPayload<S extends boolean | null | undefined | FoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$FoodCategoryPayload, S>

  type FoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCategoryCountAggregateInputType | true
    }

  export interface FoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCategory'], meta: { name: 'FoodCategory' } }
    /**
     * Find zero or one FoodCategory that matches the filter.
     * @param {FoodCategoryFindUniqueArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodCategoryFindUniqueArgs>(args: SelectSubset<T, FoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodCategoryFindFirstArgs>(args?: SelectSubset<T, FoodCategoryFindFirstArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany()
     * 
     * // Get first 10 FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodCategoryFindManyArgs>(args?: SelectSubset<T, FoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodCategory.
     * @param {FoodCategoryCreateArgs} args - Arguments to create a FoodCategory.
     * @example
     * // Create one FoodCategory
     * const FoodCategory = await prisma.foodCategory.create({
     *   data: {
     *     // ... data to create a FoodCategory
     *   }
     * })
     * 
     */
    create<T extends FoodCategoryCreateArgs>(args: SelectSubset<T, FoodCategoryCreateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodCategories.
     * @param {FoodCategoryCreateManyArgs} args - Arguments to create many FoodCategories.
     * @example
     * // Create many FoodCategories
     * const foodCategory = await prisma.foodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCategoryCreateManyArgs>(args?: SelectSubset<T, FoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodCategory.
     * @param {FoodCategoryDeleteArgs} args - Arguments to delete one FoodCategory.
     * @example
     * // Delete one FoodCategory
     * const FoodCategory = await prisma.foodCategory.delete({
     *   where: {
     *     // ... filter to delete one FoodCategory
     *   }
     * })
     * 
     */
    delete<T extends FoodCategoryDeleteArgs>(args: SelectSubset<T, FoodCategoryDeleteArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodCategory.
     * @param {FoodCategoryUpdateArgs} args - Arguments to update one FoodCategory.
     * @example
     * // Update one FoodCategory
     * const foodCategory = await prisma.foodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodCategoryUpdateArgs>(args: SelectSubset<T, FoodCategoryUpdateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodCategories.
     * @param {FoodCategoryDeleteManyArgs} args - Arguments to filter FoodCategories to delete.
     * @example
     * // Delete a few FoodCategories
     * const { count } = await prisma.foodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodCategoryDeleteManyArgs>(args?: SelectSubset<T, FoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodCategoryUpdateManyArgs>(args: SelectSubset<T, FoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodCategory.
     * @param {FoodCategoryUpsertArgs} args - Arguments to update or create a FoodCategory.
     * @example
     * // Update or create a FoodCategory
     * const foodCategory = await prisma.foodCategory.upsert({
     *   create: {
     *     // ... data to create a FoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends FoodCategoryUpsertArgs>(args: SelectSubset<T, FoodCategoryUpsertArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryCountArgs} args - Arguments to filter FoodCategories to count.
     * @example
     * // Count the number of FoodCategories
     * const count = await prisma.foodCategory.count({
     *   where: {
     *     // ... the filter for the FoodCategories we want to count
     *   }
     * })
    **/
    count<T extends FoodCategoryCountArgs>(
      args?: Subset<T, FoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodCategoryAggregateArgs>(args: Subset<T, FoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoodCategoryAggregateType<T>>

    /**
     * Group by FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodCategory model
   */
  readonly fields: FoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFavorCategories<T extends FoodCategory$userFavorCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategory$userFavorCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodCategory model
   */
  interface FoodCategoryFieldRefs {
    readonly id: FieldRef<"FoodCategory", 'Int'>
    readonly name: FieldRef<"FoodCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodCategory findUnique
   */
  export type FoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findUniqueOrThrow
   */
  export type FoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findFirst
   */
  export type FoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findFirstOrThrow
   */
  export type FoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findMany
   */
  export type FoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategories to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory create
   */
  export type FoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodCategory.
     */
    data: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
  }

  /**
   * FoodCategory createMany
   */
  export type FoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCategories.
     */
    data: FoodCategoryCreateManyInput | FoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCategory update
   */
  export type FoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodCategory.
     */
    data: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoodCategory to update.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory updateMany
   */
  export type FoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to update.
     */
    limit?: number
  }

  /**
   * FoodCategory upsert
   */
  export type FoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodCategory to update in case it exists.
     */
    where: FoodCategoryWhereUniqueInput
    /**
     * In case the FoodCategory found by the `where` argument doesn't exist, create a new FoodCategory with this data.
     */
    create: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
    /**
     * In case the FoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
  }

  /**
   * FoodCategory delete
   */
  export type FoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter which FoodCategory to delete.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory deleteMany
   */
  export type FoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategories to delete
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to delete.
     */
    limit?: number
  }

  /**
   * FoodCategory.userFavorCategories
   */
  export type FoodCategory$userFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    where?: UserFavorCategoryWhereInput
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    cursor?: UserFavorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory without action
   */
  export type FoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
  }


  /**
   * Model UserFavorCategory
   */

  export type AggregateUserFavorCategory = {
    _count: UserFavorCategoryCountAggregateOutputType | null
    _avg: UserFavorCategoryAvgAggregateOutputType | null
    _sum: UserFavorCategorySumAggregateOutputType | null
    _min: UserFavorCategoryMinAggregateOutputType | null
    _max: UserFavorCategoryMaxAggregateOutputType | null
  }

  export type UserFavorCategoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategoryCountAggregateOutputType = {
    id: number
    userId: number
    foodCategoryId: number
    _all: number
  }


  export type UserFavorCategoryAvgAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategorySumAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategoryMinAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategoryMaxAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategoryCountAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
    _all?: true
  }

  export type UserFavorCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorCategory to aggregate.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavorCategories
    **/
    _count?: true | UserFavorCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFavorCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFavorCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavorCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavorCategoryMaxAggregateInputType
  }

  export type GetUserFavorCategoryAggregateType<T extends UserFavorCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavorCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavorCategory[P]>
      : GetScalarType<T[P], AggregateUserFavorCategory[P]>
  }




  export type UserFavorCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavorCategoryWhereInput
    orderBy?: UserFavorCategoryOrderByWithAggregationInput | UserFavorCategoryOrderByWithAggregationInput[]
    by: UserFavorCategoryScalarFieldEnum[] | UserFavorCategoryScalarFieldEnum
    having?: UserFavorCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavorCategoryCountAggregateInputType | true
    _avg?: UserFavorCategoryAvgAggregateInputType
    _sum?: UserFavorCategorySumAggregateInputType
    _min?: UserFavorCategoryMinAggregateInputType
    _max?: UserFavorCategoryMaxAggregateInputType
  }

  export type UserFavorCategoryGroupByOutputType = {
    id: number
    userId: number
    foodCategoryId: number
    _count: UserFavorCategoryCountAggregateOutputType | null
    _avg: UserFavorCategoryAvgAggregateOutputType | null
    _sum: UserFavorCategorySumAggregateOutputType | null
    _min: UserFavorCategoryMinAggregateOutputType | null
    _max: UserFavorCategoryMaxAggregateOutputType | null
  }

  type GetUserFavorCategoryGroupByPayload<T extends UserFavorCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavorCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavorCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavorCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavorCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserFavorCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodCategoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodCategory?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorCategory"]>



  export type UserFavorCategorySelectScalar = {
    id?: boolean
    userId?: boolean
    foodCategoryId?: boolean
  }

  export type UserFavorCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodCategoryId", ExtArgs["result"]["userFavorCategory"]>
  export type UserFavorCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodCategory?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }

  export type $UserFavorCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavorCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foodCategory: Prisma.$FoodCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      foodCategoryId: number
    }, ExtArgs["result"]["userFavorCategory"]>
    composites: {}
  }

  type UserFavorCategoryGetPayload<S extends boolean | null | undefined | UserFavorCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserFavorCategoryPayload, S>

  type UserFavorCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavorCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavorCategoryCountAggregateInputType | true
    }

  export interface UserFavorCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavorCategory'], meta: { name: 'UserFavorCategory' } }
    /**
     * Find zero or one UserFavorCategory that matches the filter.
     * @param {UserFavorCategoryFindUniqueArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavorCategoryFindUniqueArgs>(args: SelectSubset<T, UserFavorCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavorCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavorCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavorCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavorCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryFindFirstArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavorCategoryFindFirstArgs>(args?: SelectSubset<T, UserFavorCategoryFindFirstArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryFindFirstOrThrowArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavorCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavorCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavorCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavorCategories
     * const userFavorCategories = await prisma.userFavorCategory.findMany()
     * 
     * // Get first 10 UserFavorCategories
     * const userFavorCategories = await prisma.userFavorCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavorCategoryWithIdOnly = await prisma.userFavorCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavorCategoryFindManyArgs>(args?: SelectSubset<T, UserFavorCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavorCategory.
     * @param {UserFavorCategoryCreateArgs} args - Arguments to create a UserFavorCategory.
     * @example
     * // Create one UserFavorCategory
     * const UserFavorCategory = await prisma.userFavorCategory.create({
     *   data: {
     *     // ... data to create a UserFavorCategory
     *   }
     * })
     * 
     */
    create<T extends UserFavorCategoryCreateArgs>(args: SelectSubset<T, UserFavorCategoryCreateArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavorCategories.
     * @param {UserFavorCategoryCreateManyArgs} args - Arguments to create many UserFavorCategories.
     * @example
     * // Create many UserFavorCategories
     * const userFavorCategory = await prisma.userFavorCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavorCategoryCreateManyArgs>(args?: SelectSubset<T, UserFavorCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFavorCategory.
     * @param {UserFavorCategoryDeleteArgs} args - Arguments to delete one UserFavorCategory.
     * @example
     * // Delete one UserFavorCategory
     * const UserFavorCategory = await prisma.userFavorCategory.delete({
     *   where: {
     *     // ... filter to delete one UserFavorCategory
     *   }
     * })
     * 
     */
    delete<T extends UserFavorCategoryDeleteArgs>(args: SelectSubset<T, UserFavorCategoryDeleteArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavorCategory.
     * @param {UserFavorCategoryUpdateArgs} args - Arguments to update one UserFavorCategory.
     * @example
     * // Update one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavorCategoryUpdateArgs>(args: SelectSubset<T, UserFavorCategoryUpdateArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavorCategories.
     * @param {UserFavorCategoryDeleteManyArgs} args - Arguments to filter UserFavorCategories to delete.
     * @example
     * // Delete a few UserFavorCategories
     * const { count } = await prisma.userFavorCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavorCategoryDeleteManyArgs>(args?: SelectSubset<T, UserFavorCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavorCategories
     * const userFavorCategory = await prisma.userFavorCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavorCategoryUpdateManyArgs>(args: SelectSubset<T, UserFavorCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFavorCategory.
     * @param {UserFavorCategoryUpsertArgs} args - Arguments to update or create a UserFavorCategory.
     * @example
     * // Update or create a UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.upsert({
     *   create: {
     *     // ... data to create a UserFavorCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavorCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserFavorCategoryUpsertArgs>(args: SelectSubset<T, UserFavorCategoryUpsertArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryCountArgs} args - Arguments to filter UserFavorCategories to count.
     * @example
     * // Count the number of UserFavorCategories
     * const count = await prisma.userFavorCategory.count({
     *   where: {
     *     // ... the filter for the UserFavorCategories we want to count
     *   }
     * })
    **/
    count<T extends UserFavorCategoryCountArgs>(
      args?: Subset<T, UserFavorCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavorCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFavorCategoryAggregateArgs>(args: Subset<T, UserFavorCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserFavorCategoryAggregateType<T>>

    /**
     * Group by UserFavorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFavorCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavorCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserFavorCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFavorCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavorCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavorCategory model
   */
  readonly fields: UserFavorCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavorCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavorCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodCategory<T extends FoodCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategoryDefaultArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFavorCategory model
   */
  interface UserFavorCategoryFieldRefs {
    readonly id: FieldRef<"UserFavorCategory", 'Int'>
    readonly userId: FieldRef<"UserFavorCategory", 'Int'>
    readonly foodCategoryId: FieldRef<"UserFavorCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserFavorCategory findUnique
   */
  export type UserFavorCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory findUniqueOrThrow
   */
  export type UserFavorCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory findFirst
   */
  export type UserFavorCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorCategories.
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorCategories.
     */
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * UserFavorCategory findFirstOrThrow
   */
  export type UserFavorCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorCategories.
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorCategories.
     */
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * UserFavorCategory findMany
   */
  export type UserFavorCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategories to fetch.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavorCategories.
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorCategories.
     */
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * UserFavorCategory create
   */
  export type UserFavorCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavorCategory.
     */
    data: XOR<UserFavorCategoryCreateInput, UserFavorCategoryUncheckedCreateInput>
  }

  /**
   * UserFavorCategory createMany
   */
  export type UserFavorCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavorCategories.
     */
    data: UserFavorCategoryCreateManyInput | UserFavorCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFavorCategory update
   */
  export type UserFavorCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavorCategory.
     */
    data: XOR<UserFavorCategoryUpdateInput, UserFavorCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserFavorCategory to update.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory updateMany
   */
  export type UserFavorCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavorCategories.
     */
    data: XOR<UserFavorCategoryUpdateManyMutationInput, UserFavorCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorCategories to update
     */
    where?: UserFavorCategoryWhereInput
    /**
     * Limit how many UserFavorCategories to update.
     */
    limit?: number
  }

  /**
   * UserFavorCategory upsert
   */
  export type UserFavorCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavorCategory to update in case it exists.
     */
    where: UserFavorCategoryWhereUniqueInput
    /**
     * In case the UserFavorCategory found by the `where` argument doesn't exist, create a new UserFavorCategory with this data.
     */
    create: XOR<UserFavorCategoryCreateInput, UserFavorCategoryUncheckedCreateInput>
    /**
     * In case the UserFavorCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavorCategoryUpdateInput, UserFavorCategoryUncheckedUpdateInput>
  }

  /**
   * UserFavorCategory delete
   */
  export type UserFavorCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter which UserFavorCategory to delete.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory deleteMany
   */
  export type UserFavorCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorCategories to delete
     */
    where?: UserFavorCategoryWhereInput
    /**
     * Limit how many UserFavorCategories to delete.
     */
    limit?: number
  }

  /**
   * UserFavorCategory without action
   */
  export type UserFavorCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Local
   */

  export type AggregateLocal = {
    _count: LocalCountAggregateOutputType | null
    _avg: LocalAvgAggregateOutputType | null
    _sum: LocalSumAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  export type LocalAvgAggregateOutputType = {
    localId: number | null
  }

  export type LocalSumAggregateOutputType = {
    localId: bigint | null
  }

  export type LocalMinAggregateOutputType = {
    localId: bigint | null
    localName: string | null
  }

  export type LocalMaxAggregateOutputType = {
    localId: bigint | null
    localName: string | null
  }

  export type LocalCountAggregateOutputType = {
    localId: number
    localName: number
    _all: number
  }


  export type LocalAvgAggregateInputType = {
    localId?: true
  }

  export type LocalSumAggregateInputType = {
    localId?: true
  }

  export type LocalMinAggregateInputType = {
    localId?: true
    localName?: true
  }

  export type LocalMaxAggregateInputType = {
    localId?: true
    localName?: true
  }

  export type LocalCountAggregateInputType = {
    localId?: true
    localName?: true
    _all?: true
  }

  export type LocalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Local to aggregate.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locals
    **/
    _count?: true | LocalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalMaxAggregateInputType
  }

  export type GetLocalAggregateType<T extends LocalAggregateArgs> = {
        [P in keyof T & keyof AggregateLocal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocal[P]>
      : GetScalarType<T[P], AggregateLocal[P]>
  }




  export type LocalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalWhereInput
    orderBy?: LocalOrderByWithAggregationInput | LocalOrderByWithAggregationInput[]
    by: LocalScalarFieldEnum[] | LocalScalarFieldEnum
    having?: LocalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalCountAggregateInputType | true
    _avg?: LocalAvgAggregateInputType
    _sum?: LocalSumAggregateInputType
    _min?: LocalMinAggregateInputType
    _max?: LocalMaxAggregateInputType
  }

  export type LocalGroupByOutputType = {
    localId: bigint
    localName: string
    _count: LocalCountAggregateOutputType | null
    _avg: LocalAvgAggregateOutputType | null
    _sum: LocalSumAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  type GetLocalGroupByPayload<T extends LocalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalGroupByOutputType[P]>
            : GetScalarType<T[P], LocalGroupByOutputType[P]>
        }
      >
    >


  export type LocalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    localId?: boolean
    localName?: boolean
    stores?: boolean | Local$storesArgs<ExtArgs>
    _count?: boolean | LocalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["local"]>



  export type LocalSelectScalar = {
    localId?: boolean
    localName?: boolean
  }

  export type LocalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"localId" | "localName", ExtArgs["result"]["local"]>
  export type LocalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | Local$storesArgs<ExtArgs>
    _count?: boolean | LocalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Local"
    objects: {
      stores: Prisma.$StorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      localId: bigint
      localName: string
    }, ExtArgs["result"]["local"]>
    composites: {}
  }

  type LocalGetPayload<S extends boolean | null | undefined | LocalDefaultArgs> = $Result.GetResult<Prisma.$LocalPayload, S>

  type LocalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalCountAggregateInputType | true
    }

  export interface LocalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Local'], meta: { name: 'Local' } }
    /**
     * Find zero or one Local that matches the filter.
     * @param {LocalFindUniqueArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalFindUniqueArgs>(args: SelectSubset<T, LocalFindUniqueArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Local that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalFindUniqueOrThrowArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Local that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalFindFirstArgs>(args?: SelectSubset<T, LocalFindFirstArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Local that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstOrThrowArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locals
     * const locals = await prisma.local.findMany()
     * 
     * // Get first 10 Locals
     * const locals = await prisma.local.findMany({ take: 10 })
     * 
     * // Only select the `localId`
     * const localWithLocalIdOnly = await prisma.local.findMany({ select: { localId: true } })
     * 
     */
    findMany<T extends LocalFindManyArgs>(args?: SelectSubset<T, LocalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Local.
     * @param {LocalCreateArgs} args - Arguments to create a Local.
     * @example
     * // Create one Local
     * const Local = await prisma.local.create({
     *   data: {
     *     // ... data to create a Local
     *   }
     * })
     * 
     */
    create<T extends LocalCreateArgs>(args: SelectSubset<T, LocalCreateArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locals.
     * @param {LocalCreateManyArgs} args - Arguments to create many Locals.
     * @example
     * // Create many Locals
     * const local = await prisma.local.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalCreateManyArgs>(args?: SelectSubset<T, LocalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Local.
     * @param {LocalDeleteArgs} args - Arguments to delete one Local.
     * @example
     * // Delete one Local
     * const Local = await prisma.local.delete({
     *   where: {
     *     // ... filter to delete one Local
     *   }
     * })
     * 
     */
    delete<T extends LocalDeleteArgs>(args: SelectSubset<T, LocalDeleteArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Local.
     * @param {LocalUpdateArgs} args - Arguments to update one Local.
     * @example
     * // Update one Local
     * const local = await prisma.local.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalUpdateArgs>(args: SelectSubset<T, LocalUpdateArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locals.
     * @param {LocalDeleteManyArgs} args - Arguments to filter Locals to delete.
     * @example
     * // Delete a few Locals
     * const { count } = await prisma.local.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalDeleteManyArgs>(args?: SelectSubset<T, LocalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locals
     * const local = await prisma.local.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalUpdateManyArgs>(args: SelectSubset<T, LocalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Local.
     * @param {LocalUpsertArgs} args - Arguments to update or create a Local.
     * @example
     * // Update or create a Local
     * const local = await prisma.local.upsert({
     *   create: {
     *     // ... data to create a Local
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Local we want to update
     *   }
     * })
     */
    upsert<T extends LocalUpsertArgs>(args: SelectSubset<T, LocalUpsertArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalCountArgs} args - Arguments to filter Locals to count.
     * @example
     * // Count the number of Locals
     * const count = await prisma.local.count({
     *   where: {
     *     // ... the filter for the Locals we want to count
     *   }
     * })
    **/
    count<T extends LocalCountArgs>(
      args?: Subset<T, LocalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalAggregateArgs>(args: Subset<T, LocalAggregateArgs>): Prisma.PrismaPromise<GetLocalAggregateType<T>>

    /**
     * Group by Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalGroupByArgs['orderBy'] }
        : { orderBy?: LocalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Local model
   */
  readonly fields: LocalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Local.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stores<T extends Local$storesArgs<ExtArgs> = {}>(args?: Subset<T, Local$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Local model
   */
  interface LocalFieldRefs {
    readonly localId: FieldRef<"Local", 'BigInt'>
    readonly localName: FieldRef<"Local", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Local findUnique
   */
  export type LocalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local findUniqueOrThrow
   */
  export type LocalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local findFirst
   */
  export type LocalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local findFirstOrThrow
   */
  export type LocalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Local to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local findMany
   */
  export type LocalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter, which Locals to fetch.
     */
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     */
    orderBy?: LocalOrderByWithRelationInput | LocalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locals.
     */
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     */
    distinct?: LocalScalarFieldEnum | LocalScalarFieldEnum[]
  }

  /**
   * Local create
   */
  export type LocalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The data needed to create a Local.
     */
    data: XOR<LocalCreateInput, LocalUncheckedCreateInput>
  }

  /**
   * Local createMany
   */
  export type LocalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locals.
     */
    data: LocalCreateManyInput | LocalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Local update
   */
  export type LocalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The data needed to update a Local.
     */
    data: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
    /**
     * Choose, which Local to update.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local updateMany
   */
  export type LocalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locals.
     */
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyInput>
    /**
     * Filter which Locals to update
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to update.
     */
    limit?: number
  }

  /**
   * Local upsert
   */
  export type LocalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * The filter to search for the Local to update in case it exists.
     */
    where: LocalWhereUniqueInput
    /**
     * In case the Local found by the `where` argument doesn't exist, create a new Local with this data.
     */
    create: XOR<LocalCreateInput, LocalUncheckedCreateInput>
    /**
     * In case the Local was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
  }

  /**
   * Local delete
   */
  export type LocalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
    /**
     * Filter which Local to delete.
     */
    where: LocalWhereUniqueInput
  }

  /**
   * Local deleteMany
   */
  export type LocalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locals to delete
     */
    where?: LocalWhereInput
    /**
     * Limit how many Locals to delete.
     */
    limit?: number
  }

  /**
   * Local.stores
   */
  export type Local$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Local without action
   */
  export type LocalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Local
     */
    select?: LocalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Local
     */
    omit?: LocalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    storeId: number | null
    rating: number | null
    localId: number | null
  }

  export type StoreSumAggregateOutputType = {
    storeId: bigint | null
    rating: number | null
    localId: bigint | null
  }

  export type StoreMinAggregateOutputType = {
    storeId: bigint | null
    name: string | null
    category: string | null
    startTime: string | null
    endTime: string | null
    rating: number | null
    localId: bigint | null
  }

  export type StoreMaxAggregateOutputType = {
    storeId: bigint | null
    name: string | null
    category: string | null
    startTime: string | null
    endTime: string | null
    rating: number | null
    localId: bigint | null
  }

  export type StoreCountAggregateOutputType = {
    storeId: number
    name: number
    category: number
    startTime: number
    endTime: number
    rating: number
    localId: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    storeId?: true
    rating?: true
    localId?: true
  }

  export type StoreSumAggregateInputType = {
    storeId?: true
    rating?: true
    localId?: true
  }

  export type StoreMinAggregateInputType = {
    storeId?: true
    name?: true
    category?: true
    startTime?: true
    endTime?: true
    rating?: true
    localId?: true
  }

  export type StoreMaxAggregateInputType = {
    storeId?: true
    name?: true
    category?: true
    startTime?: true
    endTime?: true
    rating?: true
    localId?: true
  }

  export type StoreCountAggregateInputType = {
    storeId?: true
    name?: true
    category?: true
    startTime?: true
    endTime?: true
    rating?: true
    localId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    storeId: bigint
    name: string
    category: string
    startTime: string
    endTime: string
    rating: number
    localId: bigint
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storeId?: boolean
    name?: boolean
    category?: boolean
    startTime?: boolean
    endTime?: boolean
    rating?: boolean
    localId?: boolean
    local?: boolean | LocalDefaultArgs<ExtArgs>
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    missions?: boolean | Store$missionsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    storeId?: boolean
    name?: boolean
    category?: boolean
    startTime?: boolean
    endTime?: boolean
    rating?: boolean
    localId?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"storeId" | "name" | "category" | "startTime" | "endTime" | "rating" | "localId", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    local?: boolean | LocalDefaultArgs<ExtArgs>
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    missions?: boolean | Store$missionsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      local: Prisma.$LocalPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      missions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      storeId: bigint
      name: string
      category: string
      startTime: string
      endTime: string
      rating: number
      localId: bigint
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `storeId`
     * const storeWithStoreIdOnly = await prisma.store.findMany({ select: { storeId: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    local<T extends LocalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalDefaultArgs<ExtArgs>>): Prisma__LocalClient<$Result.GetResult<Prisma.$LocalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Store$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Store$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends Store$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Store$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly storeId: FieldRef<"Store", 'BigInt'>
    readonly name: FieldRef<"Store", 'String'>
    readonly category: FieldRef<"Store", 'String'>
    readonly startTime: FieldRef<"Store", 'String'>
    readonly endTime: FieldRef<"Store", 'String'>
    readonly rating: FieldRef<"Store", 'Float'>
    readonly localId: FieldRef<"Store", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.reviews
   */
  export type Store$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Store.missions
   */
  export type Store$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    reviewId: number | null
    userId: number | null
    storeId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    reviewId: bigint | null
    userId: number | null
    storeId: bigint | null
  }

  export type ReviewMinAggregateOutputType = {
    reviewId: bigint | null
    content: string | null
    img: string | null
    countStar: string | null
    createdAt: Date | null
    userId: number | null
    storeId: bigint | null
  }

  export type ReviewMaxAggregateOutputType = {
    reviewId: bigint | null
    content: string | null
    img: string | null
    countStar: string | null
    createdAt: Date | null
    userId: number | null
    storeId: bigint | null
  }

  export type ReviewCountAggregateOutputType = {
    reviewId: number
    content: number
    img: number
    countStar: number
    createdAt: number
    userId: number
    storeId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    reviewId?: true
    userId?: true
    storeId?: true
  }

  export type ReviewSumAggregateInputType = {
    reviewId?: true
    userId?: true
    storeId?: true
  }

  export type ReviewMinAggregateInputType = {
    reviewId?: true
    content?: true
    img?: true
    countStar?: true
    createdAt?: true
    userId?: true
    storeId?: true
  }

  export type ReviewMaxAggregateInputType = {
    reviewId?: true
    content?: true
    img?: true
    countStar?: true
    createdAt?: true
    userId?: true
    storeId?: true
  }

  export type ReviewCountAggregateInputType = {
    reviewId?: true
    content?: true
    img?: true
    countStar?: true
    createdAt?: true
    userId?: true
    storeId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    reviewId: bigint
    content: string
    img: string | null
    countStar: string
    createdAt: Date
    userId: number
    storeId: bigint
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewId?: boolean
    content?: boolean
    img?: boolean
    countStar?: boolean
    createdAt?: boolean
    userId?: boolean
    storeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    reviewId?: boolean
    content?: boolean
    img?: boolean
    countStar?: boolean
    createdAt?: boolean
    userId?: boolean
    storeId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reviewId" | "content" | "img" | "countStar" | "createdAt" | "userId" | "storeId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reviewId: bigint
      content: string
      img: string | null
      countStar: string
      createdAt: Date
      userId: number
      storeId: bigint
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `reviewId`
     * const reviewWithReviewIdOnly = await prisma.review.findMany({ select: { reviewId: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly reviewId: FieldRef<"Review", 'BigInt'>
    readonly content: FieldRef<"Review", 'String'>
    readonly img: FieldRef<"Review", 'String'>
    readonly countStar: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly storeId: FieldRef<"Review", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    missionId: number | null
    point: number | null
    storeId: number | null
  }

  export type MissionSumAggregateOutputType = {
    missionId: bigint | null
    point: bigint | null
    storeId: bigint | null
  }

  export type MissionMinAggregateOutputType = {
    missionId: bigint | null
    detail: string | null
    point: bigint | null
    storeId: bigint | null
  }

  export type MissionMaxAggregateOutputType = {
    missionId: bigint | null
    detail: string | null
    point: bigint | null
    storeId: bigint | null
  }

  export type MissionCountAggregateOutputType = {
    missionId: number
    detail: number
    point: number
    storeId: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    missionId?: true
    point?: true
    storeId?: true
  }

  export type MissionSumAggregateInputType = {
    missionId?: true
    point?: true
    storeId?: true
  }

  export type MissionMinAggregateInputType = {
    missionId?: true
    detail?: true
    point?: true
    storeId?: true
  }

  export type MissionMaxAggregateInputType = {
    missionId?: true
    detail?: true
    point?: true
    storeId?: true
  }

  export type MissionCountAggregateInputType = {
    missionId?: true
    detail?: true
    point?: true
    storeId?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    missionId: bigint
    detail: string
    point: bigint
    storeId: bigint
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    missionId?: boolean
    detail?: boolean
    point?: boolean
    storeId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    missionStates?: boolean | Mission$missionStatesArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    missionId?: boolean
    detail?: boolean
    point?: boolean
    storeId?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"missionId" | "detail" | "point" | "storeId", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    missionStates?: boolean | Mission$missionStatesArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      missionStates: Prisma.$MissionStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      missionId: bigint
      detail: string
      point: bigint
      storeId: bigint
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `missionId`
     * const missionWithMissionIdOnly = await prisma.mission.findMany({ select: { missionId: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    missionStates<T extends Mission$missionStatesArgs<ExtArgs> = {}>(args?: Subset<T, Mission$missionStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly missionId: FieldRef<"Mission", 'BigInt'>
    readonly detail: FieldRef<"Mission", 'String'>
    readonly point: FieldRef<"Mission", 'BigInt'>
    readonly storeId: FieldRef<"Mission", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.missionStates
   */
  export type Mission$missionStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    where?: MissionStateWhereInput
    orderBy?: MissionStateOrderByWithRelationInput | MissionStateOrderByWithRelationInput[]
    cursor?: MissionStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionStateScalarFieldEnum | MissionStateScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionState
   */

  export type AggregateMissionState = {
    _count: MissionStateCountAggregateOutputType | null
    _avg: MissionStateAvgAggregateOutputType | null
    _sum: MissionStateSumAggregateOutputType | null
    _min: MissionStateMinAggregateOutputType | null
    _max: MissionStateMaxAggregateOutputType | null
  }

  export type MissionStateAvgAggregateOutputType = {
    stateId: number | null
    userId: number | null
    missionId: number | null
  }

  export type MissionStateSumAggregateOutputType = {
    stateId: bigint | null
    userId: number | null
    missionId: bigint | null
  }

  export type MissionStateMinAggregateOutputType = {
    stateId: bigint | null
    userId: number | null
    missionId: bigint | null
    state: string | null
  }

  export type MissionStateMaxAggregateOutputType = {
    stateId: bigint | null
    userId: number | null
    missionId: bigint | null
    state: string | null
  }

  export type MissionStateCountAggregateOutputType = {
    stateId: number
    userId: number
    missionId: number
    state: number
    _all: number
  }


  export type MissionStateAvgAggregateInputType = {
    stateId?: true
    userId?: true
    missionId?: true
  }

  export type MissionStateSumAggregateInputType = {
    stateId?: true
    userId?: true
    missionId?: true
  }

  export type MissionStateMinAggregateInputType = {
    stateId?: true
    userId?: true
    missionId?: true
    state?: true
  }

  export type MissionStateMaxAggregateInputType = {
    stateId?: true
    userId?: true
    missionId?: true
    state?: true
  }

  export type MissionStateCountAggregateInputType = {
    stateId?: true
    userId?: true
    missionId?: true
    state?: true
    _all?: true
  }

  export type MissionStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionState to aggregate.
     */
    where?: MissionStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionStates to fetch.
     */
    orderBy?: MissionStateOrderByWithRelationInput | MissionStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionStates
    **/
    _count?: true | MissionStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionStateMaxAggregateInputType
  }

  export type GetMissionStateAggregateType<T extends MissionStateAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionState[P]>
      : GetScalarType<T[P], AggregateMissionState[P]>
  }




  export type MissionStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionStateWhereInput
    orderBy?: MissionStateOrderByWithAggregationInput | MissionStateOrderByWithAggregationInput[]
    by: MissionStateScalarFieldEnum[] | MissionStateScalarFieldEnum
    having?: MissionStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionStateCountAggregateInputType | true
    _avg?: MissionStateAvgAggregateInputType
    _sum?: MissionStateSumAggregateInputType
    _min?: MissionStateMinAggregateInputType
    _max?: MissionStateMaxAggregateInputType
  }

  export type MissionStateGroupByOutputType = {
    stateId: bigint
    userId: number
    missionId: bigint
    state: string
    _count: MissionStateCountAggregateOutputType | null
    _avg: MissionStateAvgAggregateOutputType | null
    _sum: MissionStateSumAggregateOutputType | null
    _min: MissionStateMinAggregateOutputType | null
    _max: MissionStateMaxAggregateOutputType | null
  }

  type GetMissionStateGroupByPayload<T extends MissionStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionStateGroupByOutputType[P]>
            : GetScalarType<T[P], MissionStateGroupByOutputType[P]>
        }
      >
    >


  export type MissionStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stateId?: boolean
    userId?: boolean
    missionId?: boolean
    state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionState"]>



  export type MissionStateSelectScalar = {
    stateId?: boolean
    userId?: boolean
    missionId?: boolean
    state?: boolean
  }

  export type MissionStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stateId" | "userId" | "missionId" | "state", ExtArgs["result"]["missionState"]>
  export type MissionStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionState"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      stateId: bigint
      userId: number
      missionId: bigint
      state: string
    }, ExtArgs["result"]["missionState"]>
    composites: {}
  }

  type MissionStateGetPayload<S extends boolean | null | undefined | MissionStateDefaultArgs> = $Result.GetResult<Prisma.$MissionStatePayload, S>

  type MissionStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionStateCountAggregateInputType | true
    }

  export interface MissionStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionState'], meta: { name: 'MissionState' } }
    /**
     * Find zero or one MissionState that matches the filter.
     * @param {MissionStateFindUniqueArgs} args - Arguments to find a MissionState
     * @example
     * // Get one MissionState
     * const missionState = await prisma.missionState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionStateFindUniqueArgs>(args: SelectSubset<T, MissionStateFindUniqueArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionStateFindUniqueOrThrowArgs} args - Arguments to find a MissionState
     * @example
     * // Get one MissionState
     * const missionState = await prisma.missionState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionStateFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateFindFirstArgs} args - Arguments to find a MissionState
     * @example
     * // Get one MissionState
     * const missionState = await prisma.missionState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionStateFindFirstArgs>(args?: SelectSubset<T, MissionStateFindFirstArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateFindFirstOrThrowArgs} args - Arguments to find a MissionState
     * @example
     * // Get one MissionState
     * const missionState = await prisma.missionState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionStateFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionStates
     * const missionStates = await prisma.missionState.findMany()
     * 
     * // Get first 10 MissionStates
     * const missionStates = await prisma.missionState.findMany({ take: 10 })
     * 
     * // Only select the `stateId`
     * const missionStateWithStateIdOnly = await prisma.missionState.findMany({ select: { stateId: true } })
     * 
     */
    findMany<T extends MissionStateFindManyArgs>(args?: SelectSubset<T, MissionStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionState.
     * @param {MissionStateCreateArgs} args - Arguments to create a MissionState.
     * @example
     * // Create one MissionState
     * const MissionState = await prisma.missionState.create({
     *   data: {
     *     // ... data to create a MissionState
     *   }
     * })
     * 
     */
    create<T extends MissionStateCreateArgs>(args: SelectSubset<T, MissionStateCreateArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionStates.
     * @param {MissionStateCreateManyArgs} args - Arguments to create many MissionStates.
     * @example
     * // Create many MissionStates
     * const missionState = await prisma.missionState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionStateCreateManyArgs>(args?: SelectSubset<T, MissionStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissionState.
     * @param {MissionStateDeleteArgs} args - Arguments to delete one MissionState.
     * @example
     * // Delete one MissionState
     * const MissionState = await prisma.missionState.delete({
     *   where: {
     *     // ... filter to delete one MissionState
     *   }
     * })
     * 
     */
    delete<T extends MissionStateDeleteArgs>(args: SelectSubset<T, MissionStateDeleteArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionState.
     * @param {MissionStateUpdateArgs} args - Arguments to update one MissionState.
     * @example
     * // Update one MissionState
     * const missionState = await prisma.missionState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionStateUpdateArgs>(args: SelectSubset<T, MissionStateUpdateArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionStates.
     * @param {MissionStateDeleteManyArgs} args - Arguments to filter MissionStates to delete.
     * @example
     * // Delete a few MissionStates
     * const { count } = await prisma.missionState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionStateDeleteManyArgs>(args?: SelectSubset<T, MissionStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionStates
     * const missionState = await prisma.missionState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionStateUpdateManyArgs>(args: SelectSubset<T, MissionStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissionState.
     * @param {MissionStateUpsertArgs} args - Arguments to update or create a MissionState.
     * @example
     * // Update or create a MissionState
     * const missionState = await prisma.missionState.upsert({
     *   create: {
     *     // ... data to create a MissionState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionState we want to update
     *   }
     * })
     */
    upsert<T extends MissionStateUpsertArgs>(args: SelectSubset<T, MissionStateUpsertArgs<ExtArgs>>): Prisma__MissionStateClient<$Result.GetResult<Prisma.$MissionStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateCountArgs} args - Arguments to filter MissionStates to count.
     * @example
     * // Count the number of MissionStates
     * const count = await prisma.missionState.count({
     *   where: {
     *     // ... the filter for the MissionStates we want to count
     *   }
     * })
    **/
    count<T extends MissionStateCountArgs>(
      args?: Subset<T, MissionStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionStateAggregateArgs>(args: Subset<T, MissionStateAggregateArgs>): Prisma.PrismaPromise<GetMissionStateAggregateType<T>>

    /**
     * Group by MissionState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionStateGroupByArgs['orderBy'] }
        : { orderBy?: MissionStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionState model
   */
  readonly fields: MissionStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionState model
   */
  interface MissionStateFieldRefs {
    readonly stateId: FieldRef<"MissionState", 'BigInt'>
    readonly userId: FieldRef<"MissionState", 'Int'>
    readonly missionId: FieldRef<"MissionState", 'BigInt'>
    readonly state: FieldRef<"MissionState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MissionState findUnique
   */
  export type MissionStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * Filter, which MissionState to fetch.
     */
    where: MissionStateWhereUniqueInput
  }

  /**
   * MissionState findUniqueOrThrow
   */
  export type MissionStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * Filter, which MissionState to fetch.
     */
    where: MissionStateWhereUniqueInput
  }

  /**
   * MissionState findFirst
   */
  export type MissionStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * Filter, which MissionState to fetch.
     */
    where?: MissionStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionStates to fetch.
     */
    orderBy?: MissionStateOrderByWithRelationInput | MissionStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionStates.
     */
    cursor?: MissionStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionStates.
     */
    distinct?: MissionStateScalarFieldEnum | MissionStateScalarFieldEnum[]
  }

  /**
   * MissionState findFirstOrThrow
   */
  export type MissionStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * Filter, which MissionState to fetch.
     */
    where?: MissionStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionStates to fetch.
     */
    orderBy?: MissionStateOrderByWithRelationInput | MissionStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionStates.
     */
    cursor?: MissionStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionStates.
     */
    distinct?: MissionStateScalarFieldEnum | MissionStateScalarFieldEnum[]
  }

  /**
   * MissionState findMany
   */
  export type MissionStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * Filter, which MissionStates to fetch.
     */
    where?: MissionStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionStates to fetch.
     */
    orderBy?: MissionStateOrderByWithRelationInput | MissionStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionStates.
     */
    cursor?: MissionStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionStates.
     */
    distinct?: MissionStateScalarFieldEnum | MissionStateScalarFieldEnum[]
  }

  /**
   * MissionState create
   */
  export type MissionStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionState.
     */
    data: XOR<MissionStateCreateInput, MissionStateUncheckedCreateInput>
  }

  /**
   * MissionState createMany
   */
  export type MissionStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionStates.
     */
    data: MissionStateCreateManyInput | MissionStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionState update
   */
  export type MissionStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionState.
     */
    data: XOR<MissionStateUpdateInput, MissionStateUncheckedUpdateInput>
    /**
     * Choose, which MissionState to update.
     */
    where: MissionStateWhereUniqueInput
  }

  /**
   * MissionState updateMany
   */
  export type MissionStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionStates.
     */
    data: XOR<MissionStateUpdateManyMutationInput, MissionStateUncheckedUpdateManyInput>
    /**
     * Filter which MissionStates to update
     */
    where?: MissionStateWhereInput
    /**
     * Limit how many MissionStates to update.
     */
    limit?: number
  }

  /**
   * MissionState upsert
   */
  export type MissionStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionState to update in case it exists.
     */
    where: MissionStateWhereUniqueInput
    /**
     * In case the MissionState found by the `where` argument doesn't exist, create a new MissionState with this data.
     */
    create: XOR<MissionStateCreateInput, MissionStateUncheckedCreateInput>
    /**
     * In case the MissionState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionStateUpdateInput, MissionStateUncheckedUpdateInput>
  }

  /**
   * MissionState delete
   */
  export type MissionStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
    /**
     * Filter which MissionState to delete.
     */
    where: MissionStateWhereUniqueInput
  }

  /**
   * MissionState deleteMany
   */
  export type MissionStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionStates to delete
     */
    where?: MissionStateWhereInput
    /**
     * Limit how many MissionStates to delete.
     */
    limit?: number
  }

  /**
   * MissionState without action
   */
  export type MissionStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionState
     */
    select?: MissionStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionState
     */
    omit?: MissionStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionStateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    gender: 'gender',
    birth: 'birth',
    address: 'address',
    detailAddress: 'detailAddress',
    phoneNumber: 'phoneNumber'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FoodCategoryScalarFieldEnum = (typeof FoodCategoryScalarFieldEnum)[keyof typeof FoodCategoryScalarFieldEnum]


  export const UserFavorCategoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodCategoryId: 'foodCategoryId'
  };

  export type UserFavorCategoryScalarFieldEnum = (typeof UserFavorCategoryScalarFieldEnum)[keyof typeof UserFavorCategoryScalarFieldEnum]


  export const LocalScalarFieldEnum: {
    localId: 'localId',
    localName: 'localName'
  };

  export type LocalScalarFieldEnum = (typeof LocalScalarFieldEnum)[keyof typeof LocalScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    storeId: 'storeId',
    name: 'name',
    category: 'category',
    startTime: 'startTime',
    endTime: 'endTime',
    rating: 'rating',
    localId: 'localId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    reviewId: 'reviewId',
    content: 'content',
    img: 'img',
    countStar: 'countStar',
    createdAt: 'createdAt',
    userId: 'userId',
    storeId: 'storeId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    missionId: 'missionId',
    detail: 'detail',
    point: 'point',
    storeId: 'storeId'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionStateScalarFieldEnum: {
    stateId: 'stateId',
    userId: 'userId',
    missionId: 'missionId',
    state: 'state'
  };

  export type MissionStateScalarFieldEnum = (typeof MissionStateScalarFieldEnum)[keyof typeof MissionStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    gender: 'gender',
    address: 'address',
    detailAddress: 'detailAddress',
    phoneNumber: 'phoneNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const FoodCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FoodCategoryOrderByRelevanceFieldEnum = (typeof FoodCategoryOrderByRelevanceFieldEnum)[keyof typeof FoodCategoryOrderByRelevanceFieldEnum]


  export const LocalOrderByRelevanceFieldEnum: {
    localName: 'localName'
  };

  export type LocalOrderByRelevanceFieldEnum = (typeof LocalOrderByRelevanceFieldEnum)[keyof typeof LocalOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    name: 'name',
    category: 'category',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    content: 'content',
    img: 'img',
    countStar: 'countStar'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    detail: 'detail'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  export const MissionStateOrderByRelevanceFieldEnum: {
    state: 'state'
  };

  export type MissionStateOrderByRelevanceFieldEnum = (typeof MissionStateOrderByRelevanceFieldEnum)[keyof typeof MissionStateOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    detailAddress?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
    reviews?: ReviewListRelationFilter
    missionStates?: MissionStateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    userFavorCategories?: UserFavorCategoryOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    missionStates?: MissionStateOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    detailAddress?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
    reviews?: ReviewListRelationFilter
    missionStates?: MissionStateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    address?: StringWithAggregatesFilter<"User"> | string
    detailAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
  }

  export type FoodCategoryWhereInput = {
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    id?: IntFilter<"FoodCategory"> | number
    name?: StringFilter<"FoodCategory"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
  }

  export type FoodCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userFavorCategories?: UserFavorCategoryOrderByRelationAggregateInput
    _relevance?: FoodCategoryOrderByRelevanceInput
  }

  export type FoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    name?: StringFilter<"FoodCategory"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
  }, "id">

  export type FoodCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FoodCategoryCountOrderByAggregateInput
    _avg?: FoodCategoryAvgOrderByAggregateInput
    _max?: FoodCategoryMaxOrderByAggregateInput
    _min?: FoodCategoryMinOrderByAggregateInput
    _sum?: FoodCategorySumOrderByAggregateInput
  }

  export type FoodCategoryScalarWhereWithAggregatesInput = {
    AND?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    OR?: FoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodCategory"> | number
    name?: StringWithAggregatesFilter<"FoodCategory"> | string
  }

  export type UserFavorCategoryWhereInput = {
    AND?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    OR?: UserFavorCategoryWhereInput[]
    NOT?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    id?: IntFilter<"UserFavorCategory"> | number
    userId?: IntFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntFilter<"UserFavorCategory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodCategory?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
  }

  export type UserFavorCategoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    foodCategory?: FoodCategoryOrderByWithRelationInput
  }

  export type UserFavorCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    OR?: UserFavorCategoryWhereInput[]
    NOT?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    userId?: IntFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntFilter<"UserFavorCategory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodCategory?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
  }, "id">

  export type UserFavorCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
    _count?: UserFavorCategoryCountOrderByAggregateInput
    _avg?: UserFavorCategoryAvgOrderByAggregateInput
    _max?: UserFavorCategoryMaxOrderByAggregateInput
    _min?: UserFavorCategoryMinOrderByAggregateInput
    _sum?: UserFavorCategorySumOrderByAggregateInput
  }

  export type UserFavorCategoryScalarWhereWithAggregatesInput = {
    AND?: UserFavorCategoryScalarWhereWithAggregatesInput | UserFavorCategoryScalarWhereWithAggregatesInput[]
    OR?: UserFavorCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserFavorCategoryScalarWhereWithAggregatesInput | UserFavorCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserFavorCategory"> | number
    userId?: IntWithAggregatesFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntWithAggregatesFilter<"UserFavorCategory"> | number
  }

  export type LocalWhereInput = {
    AND?: LocalWhereInput | LocalWhereInput[]
    OR?: LocalWhereInput[]
    NOT?: LocalWhereInput | LocalWhereInput[]
    localId?: BigIntFilter<"Local"> | bigint | number
    localName?: StringFilter<"Local"> | string
    stores?: StoreListRelationFilter
  }

  export type LocalOrderByWithRelationInput = {
    localId?: SortOrder
    localName?: SortOrder
    stores?: StoreOrderByRelationAggregateInput
    _relevance?: LocalOrderByRelevanceInput
  }

  export type LocalWhereUniqueInput = Prisma.AtLeast<{
    localId?: bigint | number
    AND?: LocalWhereInput | LocalWhereInput[]
    OR?: LocalWhereInput[]
    NOT?: LocalWhereInput | LocalWhereInput[]
    localName?: StringFilter<"Local"> | string
    stores?: StoreListRelationFilter
  }, "localId">

  export type LocalOrderByWithAggregationInput = {
    localId?: SortOrder
    localName?: SortOrder
    _count?: LocalCountOrderByAggregateInput
    _avg?: LocalAvgOrderByAggregateInput
    _max?: LocalMaxOrderByAggregateInput
    _min?: LocalMinOrderByAggregateInput
    _sum?: LocalSumOrderByAggregateInput
  }

  export type LocalScalarWhereWithAggregatesInput = {
    AND?: LocalScalarWhereWithAggregatesInput | LocalScalarWhereWithAggregatesInput[]
    OR?: LocalScalarWhereWithAggregatesInput[]
    NOT?: LocalScalarWhereWithAggregatesInput | LocalScalarWhereWithAggregatesInput[]
    localId?: BigIntWithAggregatesFilter<"Local"> | bigint | number
    localName?: StringWithAggregatesFilter<"Local"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    storeId?: BigIntFilter<"Store"> | bigint | number
    name?: StringFilter<"Store"> | string
    category?: StringFilter<"Store"> | string
    startTime?: StringFilter<"Store"> | string
    endTime?: StringFilter<"Store"> | string
    rating?: FloatFilter<"Store"> | number
    localId?: BigIntFilter<"Store"> | bigint | number
    local?: XOR<LocalScalarRelationFilter, LocalWhereInput>
    reviews?: ReviewListRelationFilter
    missions?: MissionListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    storeId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
    local?: LocalOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    missions?: MissionOrderByRelationAggregateInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    storeId?: bigint | number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    category?: StringFilter<"Store"> | string
    startTime?: StringFilter<"Store"> | string
    endTime?: StringFilter<"Store"> | string
    rating?: FloatFilter<"Store"> | number
    localId?: BigIntFilter<"Store"> | bigint | number
    local?: XOR<LocalScalarRelationFilter, LocalWhereInput>
    reviews?: ReviewListRelationFilter
    missions?: MissionListRelationFilter
  }, "storeId">

  export type StoreOrderByWithAggregationInput = {
    storeId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    storeId?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    name?: StringWithAggregatesFilter<"Store"> | string
    category?: StringWithAggregatesFilter<"Store"> | string
    startTime?: StringWithAggregatesFilter<"Store"> | string
    endTime?: StringWithAggregatesFilter<"Store"> | string
    rating?: FloatWithAggregatesFilter<"Store"> | number
    localId?: BigIntWithAggregatesFilter<"Store"> | bigint | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    reviewId?: BigIntFilter<"Review"> | bigint | number
    content?: StringFilter<"Review"> | string
    img?: StringNullableFilter<"Review"> | string | null
    countStar?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    userId?: IntFilter<"Review"> | number
    storeId?: BigIntFilter<"Review"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    reviewId?: SortOrder
    content?: SortOrder
    img?: SortOrderInput | SortOrder
    countStar?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    user?: UserOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    reviewId?: bigint | number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    content?: StringFilter<"Review"> | string
    img?: StringNullableFilter<"Review"> | string | null
    countStar?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    userId?: IntFilter<"Review"> | number
    storeId?: BigIntFilter<"Review"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "reviewId">

  export type ReviewOrderByWithAggregationInput = {
    reviewId?: SortOrder
    content?: SortOrder
    img?: SortOrderInput | SortOrder
    countStar?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    reviewId?: BigIntWithAggregatesFilter<"Review"> | bigint | number
    content?: StringWithAggregatesFilter<"Review"> | string
    img?: StringNullableWithAggregatesFilter<"Review"> | string | null
    countStar?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    userId?: IntWithAggregatesFilter<"Review"> | number
    storeId?: BigIntWithAggregatesFilter<"Review"> | bigint | number
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    missionId?: BigIntFilter<"Mission"> | bigint | number
    detail?: StringFilter<"Mission"> | string
    point?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    missionStates?: MissionStateListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    missionId?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
    store?: StoreOrderByWithRelationInput
    missionStates?: MissionStateOrderByRelationAggregateInput
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    missionId?: bigint | number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    detail?: StringFilter<"Mission"> | string
    point?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    missionStates?: MissionStateListRelationFilter
  }, "missionId">

  export type MissionOrderByWithAggregationInput = {
    missionId?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    missionId?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    detail?: StringWithAggregatesFilter<"Mission"> | string
    point?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    storeId?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
  }

  export type MissionStateWhereInput = {
    AND?: MissionStateWhereInput | MissionStateWhereInput[]
    OR?: MissionStateWhereInput[]
    NOT?: MissionStateWhereInput | MissionStateWhereInput[]
    stateId?: BigIntFilter<"MissionState"> | bigint | number
    userId?: IntFilter<"MissionState"> | number
    missionId?: BigIntFilter<"MissionState"> | bigint | number
    state?: StringFilter<"MissionState"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionStateOrderByWithRelationInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    state?: SortOrder
    user?: UserOrderByWithRelationInput
    mission?: MissionOrderByWithRelationInput
    _relevance?: MissionStateOrderByRelevanceInput
  }

  export type MissionStateWhereUniqueInput = Prisma.AtLeast<{
    stateId?: bigint | number
    AND?: MissionStateWhereInput | MissionStateWhereInput[]
    OR?: MissionStateWhereInput[]
    NOT?: MissionStateWhereInput | MissionStateWhereInput[]
    userId?: IntFilter<"MissionState"> | number
    missionId?: BigIntFilter<"MissionState"> | bigint | number
    state?: StringFilter<"MissionState"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "stateId">

  export type MissionStateOrderByWithAggregationInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    state?: SortOrder
    _count?: MissionStateCountOrderByAggregateInput
    _avg?: MissionStateAvgOrderByAggregateInput
    _max?: MissionStateMaxOrderByAggregateInput
    _min?: MissionStateMinOrderByAggregateInput
    _sum?: MissionStateSumOrderByAggregateInput
  }

  export type MissionStateScalarWhereWithAggregatesInput = {
    AND?: MissionStateScalarWhereWithAggregatesInput | MissionStateScalarWhereWithAggregatesInput[]
    OR?: MissionStateScalarWhereWithAggregatesInput[]
    NOT?: MissionStateScalarWhereWithAggregatesInput | MissionStateScalarWhereWithAggregatesInput[]
    stateId?: BigIntWithAggregatesFilter<"MissionState"> | bigint | number
    userId?: IntWithAggregatesFilter<"MissionState"> | number
    missionId?: BigIntWithAggregatesFilter<"MissionState"> | bigint | number
    state?: StringWithAggregatesFilter<"MissionState"> | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    missionStates?: MissionStateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    missionStates?: MissionStateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    missionStates?: MissionStateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    missionStates?: MissionStateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryCreateInput = {
    name: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutFoodCategoryInput
  }

  export type FoodCategoryUncheckedCreateInput = {
    id?: number
    name: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutFoodCategoryInput
  }

  export type FoodCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutFoodCategoryNestedInput
  }

  export type FoodCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryNestedInput
  }

  export type FoodCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type FoodCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavorCategoryCreateInput = {
    user: UserCreateNestedOneWithoutUserFavorCategoriesInput
    foodCategory: FoodCategoryCreateNestedOneWithoutUserFavorCategoriesInput
  }

  export type UserFavorCategoryUncheckedCreateInput = {
    id?: number
    userId: number
    foodCategoryId: number
  }

  export type UserFavorCategoryUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
    foodCategory?: FoodCategoryUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
  }

  export type UserFavorCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryCreateManyInput = {
    id?: number
    userId: number
    foodCategoryId: number
  }

  export type UserFavorCategoryUpdateManyMutationInput = {

  }

  export type UserFavorCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type LocalCreateInput = {
    localId?: bigint | number
    localName: string
    stores?: StoreCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateInput = {
    localId?: bigint | number
    localName: string
    stores?: StoreUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalUpdateInput = {
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    localName?: StringFieldUpdateOperationsInput | string
    stores?: StoreUpdateManyWithoutLocalNestedInput
  }

  export type LocalUncheckedUpdateInput = {
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    localName?: StringFieldUpdateOperationsInput | string
    stores?: StoreUncheckedUpdateManyWithoutLocalNestedInput
  }

  export type LocalCreateManyInput = {
    localId?: bigint | number
    localName: string
  }

  export type LocalUpdateManyMutationInput = {
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    localName?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUncheckedUpdateManyInput = {
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    localName?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    local: LocalCreateNestedOneWithoutStoresInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    missions?: MissionCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    localId: bigint | number
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    local?: LocalUpdateOneRequiredWithoutStoresNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    missions?: MissionUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    localId: bigint | number
  }

  export type StoreUpdateManyMutationInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateManyInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewCreateInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    store: StoreCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    userId: number
    storeId: bigint | number
  }

  export type ReviewUpdateInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    store?: StoreUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewCreateManyInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    userId: number
    storeId: bigint | number
  }

  export type ReviewUpdateManyMutationInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionCreateInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    store: StoreCreateNestedOneWithoutMissionsInput
    missionStates?: MissionStateCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    storeId: bigint | number
    missionStates?: MissionStateUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
    missionStates?: MissionStateUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionStates?: MissionStateUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    storeId: bigint | number
  }

  export type MissionUpdateManyMutationInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionUncheckedUpdateManyInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionStateCreateInput = {
    stateId?: bigint | number
    state?: string
    user: UserCreateNestedOneWithoutMissionStatesInput
    mission: MissionCreateNestedOneWithoutMissionStatesInput
  }

  export type MissionStateUncheckedCreateInput = {
    stateId?: bigint | number
    userId: number
    missionId: bigint | number
    state?: string
  }

  export type MissionStateUpdateInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMissionStatesNestedInput
    mission?: MissionUpdateOneRequiredWithoutMissionStatesNestedInput
  }

  export type MissionStateUncheckedUpdateInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type MissionStateCreateManyInput = {
    stateId?: bigint | number
    userId: number
    missionId: bigint | number
    state?: string
  }

  export type MissionStateUpdateManyMutationInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type MissionStateUncheckedUpdateManyInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserFavorCategoryListRelationFilter = {
    every?: UserFavorCategoryWhereInput
    some?: UserFavorCategoryWhereInput
    none?: UserFavorCategoryWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type MissionStateListRelationFilter = {
    every?: MissionStateWhereInput
    some?: MissionStateWhereInput
    none?: MissionStateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserFavorCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FoodCategoryOrderByRelevanceInput = {
    fields: FoodCategoryOrderByRelevanceFieldEnum | FoodCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodCategoryScalarRelationFilter = {
    is?: FoodCategoryWhereInput
    isNot?: FoodCategoryWhereInput
  }

  export type UserFavorCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalOrderByRelevanceInput = {
    fields: LocalOrderByRelevanceFieldEnum | LocalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocalCountOrderByAggregateInput = {
    localId?: SortOrder
    localName?: SortOrder
  }

  export type LocalAvgOrderByAggregateInput = {
    localId?: SortOrder
  }

  export type LocalMaxOrderByAggregateInput = {
    localId?: SortOrder
    localName?: SortOrder
  }

  export type LocalMinOrderByAggregateInput = {
    localId?: SortOrder
    localName?: SortOrder
  }

  export type LocalSumOrderByAggregateInput = {
    localId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LocalScalarRelationFilter = {
    is?: LocalWhereInput
    isNot?: LocalWhereInput
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    storeId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    storeId?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    storeId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    storeId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    storeId?: SortOrder
    rating?: SortOrder
    localId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    reviewId?: SortOrder
    content?: SortOrder
    img?: SortOrder
    countStar?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    reviewId?: SortOrder
    content?: SortOrder
    img?: SortOrder
    countStar?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    reviewId?: SortOrder
    content?: SortOrder
    img?: SortOrder
    countStar?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    missionId?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    missionId?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    missionId?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    missionId?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    missionId?: SortOrder
    point?: SortOrder
    storeId?: SortOrder
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type MissionStateOrderByRelevanceInput = {
    fields: MissionStateOrderByRelevanceFieldEnum | MissionStateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionStateCountOrderByAggregateInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    state?: SortOrder
  }

  export type MissionStateAvgOrderByAggregateInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type MissionStateMaxOrderByAggregateInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    state?: SortOrder
  }

  export type MissionStateMinOrderByAggregateInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    state?: SortOrder
  }

  export type MissionStateSumOrderByAggregateInput = {
    stateId?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type UserFavorCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionStateCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionStateCreateWithoutUserInput, MissionStateUncheckedCreateWithoutUserInput> | MissionStateCreateWithoutUserInput[] | MissionStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutUserInput | MissionStateCreateOrConnectWithoutUserInput[]
    createMany?: MissionStateCreateManyUserInputEnvelope
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
  }

  export type UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionStateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionStateCreateWithoutUserInput, MissionStateUncheckedCreateWithoutUserInput> | MissionStateCreateWithoutUserInput[] | MissionStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutUserInput | MissionStateCreateOrConnectWithoutUserInput[]
    createMany?: MissionStateCreateManyUserInputEnvelope
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserFavorCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput | UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput | UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutUserInput | UserFavorCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionStateUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionStateCreateWithoutUserInput, MissionStateUncheckedCreateWithoutUserInput> | MissionStateCreateWithoutUserInput[] | MissionStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutUserInput | MissionStateCreateOrConnectWithoutUserInput[]
    upsert?: MissionStateUpsertWithWhereUniqueWithoutUserInput | MissionStateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionStateCreateManyUserInputEnvelope
    set?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    disconnect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    delete?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    update?: MissionStateUpdateWithWhereUniqueWithoutUserInput | MissionStateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionStateUpdateManyWithWhereWithoutUserInput | MissionStateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionStateScalarWhereInput | MissionStateScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput | UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput | UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutUserInput | UserFavorCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionStateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionStateCreateWithoutUserInput, MissionStateUncheckedCreateWithoutUserInput> | MissionStateCreateWithoutUserInput[] | MissionStateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutUserInput | MissionStateCreateOrConnectWithoutUserInput[]
    upsert?: MissionStateUpsertWithWhereUniqueWithoutUserInput | MissionStateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionStateCreateManyUserInputEnvelope
    set?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    disconnect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    delete?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    update?: MissionStateUpdateWithWhereUniqueWithoutUserInput | MissionStateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionStateUpdateManyWithWhereWithoutUserInput | MissionStateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionStateScalarWhereInput | MissionStateScalarWhereInput[]
  }

  export type UserFavorCategoryCreateNestedManyWithoutFoodCategoryInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type UserFavorCategoryUncheckedCreateNestedManyWithoutFoodCategoryInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type UserFavorCategoryUpdateManyWithoutFoodCategoryNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput | UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput | UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFavorCategoriesInput = {
    create?: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavorCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCategoryCreateNestedOneWithoutUserFavorCategoriesInput = {
    create?: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutUserFavorCategoriesInput
    connect?: FoodCategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserFavorCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavorCategoriesInput
    upsert?: UserUpsertWithoutUserFavorCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFavorCategoriesInput, UserUpdateWithoutUserFavorCategoriesInput>, UserUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type FoodCategoryUpdateOneRequiredWithoutUserFavorCategoriesNestedInput = {
    create?: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutUserFavorCategoriesInput
    upsert?: FoodCategoryUpsertWithoutUserFavorCategoriesInput
    connect?: FoodCategoryWhereUniqueInput
    update?: XOR<XOR<FoodCategoryUpdateToOneWithWhereWithoutUserFavorCategoriesInput, FoodCategoryUpdateWithoutUserFavorCategoriesInput>, FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type StoreCreateNestedManyWithoutLocalInput = {
    create?: XOR<StoreCreateWithoutLocalInput, StoreUncheckedCreateWithoutLocalInput> | StoreCreateWithoutLocalInput[] | StoreUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocalInput | StoreCreateOrConnectWithoutLocalInput[]
    createMany?: StoreCreateManyLocalInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutLocalInput = {
    create?: XOR<StoreCreateWithoutLocalInput, StoreUncheckedCreateWithoutLocalInput> | StoreCreateWithoutLocalInput[] | StoreUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocalInput | StoreCreateOrConnectWithoutLocalInput[]
    createMany?: StoreCreateManyLocalInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StoreUpdateManyWithoutLocalNestedInput = {
    create?: XOR<StoreCreateWithoutLocalInput, StoreUncheckedCreateWithoutLocalInput> | StoreCreateWithoutLocalInput[] | StoreUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocalInput | StoreCreateOrConnectWithoutLocalInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutLocalInput | StoreUpsertWithWhereUniqueWithoutLocalInput[]
    createMany?: StoreCreateManyLocalInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutLocalInput | StoreUpdateWithWhereUniqueWithoutLocalInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutLocalInput | StoreUpdateManyWithWhereWithoutLocalInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutLocalNestedInput = {
    create?: XOR<StoreCreateWithoutLocalInput, StoreUncheckedCreateWithoutLocalInput> | StoreCreateWithoutLocalInput[] | StoreUncheckedCreateWithoutLocalInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocalInput | StoreCreateOrConnectWithoutLocalInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutLocalInput | StoreUpsertWithWhereUniqueWithoutLocalInput[]
    createMany?: StoreCreateManyLocalInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutLocalInput | StoreUpdateWithWhereUniqueWithoutLocalInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutLocalInput | StoreUpdateManyWithWhereWithoutLocalInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type LocalCreateNestedOneWithoutStoresInput = {
    create?: XOR<LocalCreateWithoutStoresInput, LocalUncheckedCreateWithoutStoresInput>
    connectOrCreate?: LocalCreateOrConnectWithoutStoresInput
    connect?: LocalWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocalUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<LocalCreateWithoutStoresInput, LocalUncheckedCreateWithoutStoresInput>
    connectOrCreate?: LocalCreateOrConnectWithoutStoresInput
    upsert?: LocalUpsertWithoutStoresInput
    connect?: LocalWhereUniqueInput
    update?: XOR<XOR<LocalUpdateToOneWithWhereWithoutStoresInput, LocalUpdateWithoutStoresInput>, LocalUncheckedUpdateWithoutStoresInput>
  }

  export type ReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutStoreInput | MissionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutStoreInput | MissionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutStoreInput | MissionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutStoreInput | MissionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutStoreInput | MissionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutStoreInput | MissionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutReviewsInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    upsert?: StoreUpsertWithoutReviewsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutReviewsInput, StoreUpdateWithoutReviewsInput>, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreCreateNestedOneWithoutMissionsInput = {
    create?: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionsInput
    connect?: StoreWhereUniqueInput
  }

  export type MissionStateCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionStateCreateWithoutMissionInput, MissionStateUncheckedCreateWithoutMissionInput> | MissionStateCreateWithoutMissionInput[] | MissionStateUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutMissionInput | MissionStateCreateOrConnectWithoutMissionInput[]
    createMany?: MissionStateCreateManyMissionInputEnvelope
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
  }

  export type MissionStateUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionStateCreateWithoutMissionInput, MissionStateUncheckedCreateWithoutMissionInput> | MissionStateCreateWithoutMissionInput[] | MissionStateUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutMissionInput | MissionStateCreateOrConnectWithoutMissionInput[]
    createMany?: MissionStateCreateManyMissionInputEnvelope
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionsInput
    upsert?: StoreUpsertWithoutMissionsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutMissionsInput, StoreUpdateWithoutMissionsInput>, StoreUncheckedUpdateWithoutMissionsInput>
  }

  export type MissionStateUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionStateCreateWithoutMissionInput, MissionStateUncheckedCreateWithoutMissionInput> | MissionStateCreateWithoutMissionInput[] | MissionStateUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutMissionInput | MissionStateCreateOrConnectWithoutMissionInput[]
    upsert?: MissionStateUpsertWithWhereUniqueWithoutMissionInput | MissionStateUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionStateCreateManyMissionInputEnvelope
    set?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    disconnect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    delete?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    update?: MissionStateUpdateWithWhereUniqueWithoutMissionInput | MissionStateUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionStateUpdateManyWithWhereWithoutMissionInput | MissionStateUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionStateScalarWhereInput | MissionStateScalarWhereInput[]
  }

  export type MissionStateUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionStateCreateWithoutMissionInput, MissionStateUncheckedCreateWithoutMissionInput> | MissionStateCreateWithoutMissionInput[] | MissionStateUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionStateCreateOrConnectWithoutMissionInput | MissionStateCreateOrConnectWithoutMissionInput[]
    upsert?: MissionStateUpsertWithWhereUniqueWithoutMissionInput | MissionStateUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionStateCreateManyMissionInputEnvelope
    set?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    disconnect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    delete?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    connect?: MissionStateWhereUniqueInput | MissionStateWhereUniqueInput[]
    update?: MissionStateUpdateWithWhereUniqueWithoutMissionInput | MissionStateUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionStateUpdateManyWithWhereWithoutMissionInput | MissionStateUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionStateScalarWhereInput | MissionStateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMissionStatesInput = {
    create?: XOR<UserCreateWithoutMissionStatesInput, UserUncheckedCreateWithoutMissionStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionStatesInput
    connect?: UserWhereUniqueInput
  }

  export type MissionCreateNestedOneWithoutMissionStatesInput = {
    create?: XOR<MissionCreateWithoutMissionStatesInput, MissionUncheckedCreateWithoutMissionStatesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutMissionStatesInput
    connect?: MissionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMissionStatesNestedInput = {
    create?: XOR<UserCreateWithoutMissionStatesInput, UserUncheckedCreateWithoutMissionStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionStatesInput
    upsert?: UserUpsertWithoutMissionStatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMissionStatesInput, UserUpdateWithoutMissionStatesInput>, UserUncheckedUpdateWithoutMissionStatesInput>
  }

  export type MissionUpdateOneRequiredWithoutMissionStatesNestedInput = {
    create?: XOR<MissionCreateWithoutMissionStatesInput, MissionUncheckedCreateWithoutMissionStatesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutMissionStatesInput
    upsert?: MissionUpsertWithoutMissionStatesInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutMissionStatesInput, MissionUpdateWithoutMissionStatesInput>, MissionUncheckedUpdateWithoutMissionStatesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserFavorCategoryCreateWithoutUserInput = {
    foodCategory: FoodCategoryCreateNestedOneWithoutUserFavorCategoriesInput
  }

  export type UserFavorCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    foodCategoryId: number
  }

  export type UserFavorCategoryCreateOrConnectWithoutUserInput = {
    where: UserFavorCategoryWhereUniqueInput
    create: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserFavorCategoryCreateManyUserInputEnvelope = {
    data: UserFavorCategoryCreateManyUserInput | UserFavorCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    storeId: bigint | number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MissionStateCreateWithoutUserInput = {
    stateId?: bigint | number
    state?: string
    mission: MissionCreateNestedOneWithoutMissionStatesInput
  }

  export type MissionStateUncheckedCreateWithoutUserInput = {
    stateId?: bigint | number
    missionId: bigint | number
    state?: string
  }

  export type MissionStateCreateOrConnectWithoutUserInput = {
    where: MissionStateWhereUniqueInput
    create: XOR<MissionStateCreateWithoutUserInput, MissionStateUncheckedCreateWithoutUserInput>
  }

  export type MissionStateCreateManyUserInputEnvelope = {
    data: MissionStateCreateManyUserInput | MissionStateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavorCategoryWhereUniqueInput
    update: XOR<UserFavorCategoryUpdateWithoutUserInput, UserFavorCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavorCategoryWhereUniqueInput
    data: XOR<UserFavorCategoryUpdateWithoutUserInput, UserFavorCategoryUncheckedUpdateWithoutUserInput>
  }

  export type UserFavorCategoryUpdateManyWithWhereWithoutUserInput = {
    where: UserFavorCategoryScalarWhereInput
    data: XOR<UserFavorCategoryUpdateManyMutationInput, UserFavorCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavorCategoryScalarWhereInput = {
    AND?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
    OR?: UserFavorCategoryScalarWhereInput[]
    NOT?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
    id?: IntFilter<"UserFavorCategory"> | number
    userId?: IntFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntFilter<"UserFavorCategory"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    reviewId?: BigIntFilter<"Review"> | bigint | number
    content?: StringFilter<"Review"> | string
    img?: StringNullableFilter<"Review"> | string | null
    countStar?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    userId?: IntFilter<"Review"> | number
    storeId?: BigIntFilter<"Review"> | bigint | number
  }

  export type MissionStateUpsertWithWhereUniqueWithoutUserInput = {
    where: MissionStateWhereUniqueInput
    update: XOR<MissionStateUpdateWithoutUserInput, MissionStateUncheckedUpdateWithoutUserInput>
    create: XOR<MissionStateCreateWithoutUserInput, MissionStateUncheckedCreateWithoutUserInput>
  }

  export type MissionStateUpdateWithWhereUniqueWithoutUserInput = {
    where: MissionStateWhereUniqueInput
    data: XOR<MissionStateUpdateWithoutUserInput, MissionStateUncheckedUpdateWithoutUserInput>
  }

  export type MissionStateUpdateManyWithWhereWithoutUserInput = {
    where: MissionStateScalarWhereInput
    data: XOR<MissionStateUpdateManyMutationInput, MissionStateUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionStateScalarWhereInput = {
    AND?: MissionStateScalarWhereInput | MissionStateScalarWhereInput[]
    OR?: MissionStateScalarWhereInput[]
    NOT?: MissionStateScalarWhereInput | MissionStateScalarWhereInput[]
    stateId?: BigIntFilter<"MissionState"> | bigint | number
    userId?: IntFilter<"MissionState"> | number
    missionId?: BigIntFilter<"MissionState"> | bigint | number
    state?: StringFilter<"MissionState"> | string
  }

  export type UserFavorCategoryCreateWithoutFoodCategoryInput = {
    user: UserCreateNestedOneWithoutUserFavorCategoriesInput
  }

  export type UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput = {
    id?: number
    userId: number
  }

  export type UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput = {
    where: UserFavorCategoryWhereUniqueInput
    create: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput>
  }

  export type UserFavorCategoryCreateManyFoodCategoryInputEnvelope = {
    data: UserFavorCategoryCreateManyFoodCategoryInput | UserFavorCategoryCreateManyFoodCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput = {
    where: UserFavorCategoryWhereUniqueInput
    update: XOR<UserFavorCategoryUpdateWithoutFoodCategoryInput, UserFavorCategoryUncheckedUpdateWithoutFoodCategoryInput>
    create: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput>
  }

  export type UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput = {
    where: UserFavorCategoryWhereUniqueInput
    data: XOR<UserFavorCategoryUpdateWithoutFoodCategoryInput, UserFavorCategoryUncheckedUpdateWithoutFoodCategoryInput>
  }

  export type UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput = {
    where: UserFavorCategoryScalarWhereInput
    data: XOR<UserFavorCategoryUpdateManyMutationInput, UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryInput>
  }

  export type UserCreateWithoutUserFavorCategoriesInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    missionStates?: MissionStateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFavorCategoriesInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    missionStates?: MissionStateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFavorCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
  }

  export type FoodCategoryCreateWithoutUserFavorCategoriesInput = {
    name: string
  }

  export type FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput = {
    id?: number
    name: string
  }

  export type FoodCategoryCreateOrConnectWithoutUserFavorCategoriesInput = {
    where: FoodCategoryWhereUniqueInput
    create: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
  }

  export type UserUpsertWithoutUserFavorCategoriesInput = {
    update: XOR<UserUpdateWithoutUserFavorCategoriesInput, UserUncheckedUpdateWithoutUserFavorCategoriesInput>
    create: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFavorCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFavorCategoriesInput, UserUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type UserUpdateWithoutUserFavorCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    missionStates?: MissionStateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFavorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    missionStates?: MissionStateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodCategoryUpsertWithoutUserFavorCategoriesInput = {
    update: XOR<FoodCategoryUpdateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput>
    create: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
    where?: FoodCategoryWhereInput
  }

  export type FoodCategoryUpdateToOneWithWhereWithoutUserFavorCategoriesInput = {
    where?: FoodCategoryWhereInput
    data: XOR<FoodCategoryUpdateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type FoodCategoryUpdateWithoutUserFavorCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateWithoutLocalInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    missions?: MissionCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutLocalInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutLocalInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutLocalInput, StoreUncheckedCreateWithoutLocalInput>
  }

  export type StoreCreateManyLocalInputEnvelope = {
    data: StoreCreateManyLocalInput | StoreCreateManyLocalInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutLocalInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutLocalInput, StoreUncheckedUpdateWithoutLocalInput>
    create: XOR<StoreCreateWithoutLocalInput, StoreUncheckedCreateWithoutLocalInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutLocalInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutLocalInput, StoreUncheckedUpdateWithoutLocalInput>
  }

  export type StoreUpdateManyWithWhereWithoutLocalInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutLocalInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    storeId?: BigIntFilter<"Store"> | bigint | number
    name?: StringFilter<"Store"> | string
    category?: StringFilter<"Store"> | string
    startTime?: StringFilter<"Store"> | string
    endTime?: StringFilter<"Store"> | string
    rating?: FloatFilter<"Store"> | number
    localId?: BigIntFilter<"Store"> | bigint | number
  }

  export type LocalCreateWithoutStoresInput = {
    localId?: bigint | number
    localName: string
  }

  export type LocalUncheckedCreateWithoutStoresInput = {
    localId?: bigint | number
    localName: string
  }

  export type LocalCreateOrConnectWithoutStoresInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutStoresInput, LocalUncheckedCreateWithoutStoresInput>
  }

  export type ReviewCreateWithoutStoreInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutStoreInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    userId: number
  }

  export type ReviewCreateOrConnectWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewCreateManyStoreInputEnvelope = {
    data: ReviewCreateManyStoreInput | ReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type MissionCreateWithoutStoreInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    missionStates?: MissionStateCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutStoreInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    missionStates?: MissionStateUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutStoreInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput>
  }

  export type MissionCreateManyStoreInputEnvelope = {
    data: MissionCreateManyStoreInput | MissionCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type LocalUpsertWithoutStoresInput = {
    update: XOR<LocalUpdateWithoutStoresInput, LocalUncheckedUpdateWithoutStoresInput>
    create: XOR<LocalCreateWithoutStoresInput, LocalUncheckedCreateWithoutStoresInput>
    where?: LocalWhereInput
  }

  export type LocalUpdateToOneWithWhereWithoutStoresInput = {
    where?: LocalWhereInput
    data: XOR<LocalUpdateWithoutStoresInput, LocalUncheckedUpdateWithoutStoresInput>
  }

  export type LocalUpdateWithoutStoresInput = {
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    localName?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUncheckedUpdateWithoutStoresInput = {
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    localName?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStoreInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type MissionUpsertWithWhereUniqueWithoutStoreInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutStoreInput, MissionUncheckedUpdateWithoutStoreInput>
    create: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutStoreInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutStoreInput, MissionUncheckedUpdateWithoutStoreInput>
  }

  export type MissionUpdateManyWithWhereWithoutStoreInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutStoreInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    missionId?: BigIntFilter<"Mission"> | bigint | number
    detail?: StringFilter<"Mission"> | string
    point?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutUserInput
    missionStates?: MissionStateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput
    missionStates?: MissionStateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type StoreCreateWithoutReviewsInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    local: LocalCreateNestedOneWithoutStoresInput
    missions?: MissionCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutReviewsInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    localId: bigint | number
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutReviewsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutUserNestedInput
    missionStates?: MissionStateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput
    missionStates?: MissionStateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreUpsertWithoutReviewsInput = {
    update: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutReviewsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateWithoutReviewsInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    local?: LocalUpdateOneRequiredWithoutStoresNestedInput
    missions?: MissionUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutReviewsInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutMissionsInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    local: LocalCreateNestedOneWithoutStoresInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutMissionsInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
    localId: bigint | number
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutMissionsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
  }

  export type MissionStateCreateWithoutMissionInput = {
    stateId?: bigint | number
    state?: string
    user: UserCreateNestedOneWithoutMissionStatesInput
  }

  export type MissionStateUncheckedCreateWithoutMissionInput = {
    stateId?: bigint | number
    userId: number
    state?: string
  }

  export type MissionStateCreateOrConnectWithoutMissionInput = {
    where: MissionStateWhereUniqueInput
    create: XOR<MissionStateCreateWithoutMissionInput, MissionStateUncheckedCreateWithoutMissionInput>
  }

  export type MissionStateCreateManyMissionInputEnvelope = {
    data: MissionStateCreateManyMissionInput | MissionStateCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutMissionsInput = {
    update: XOR<StoreUpdateWithoutMissionsInput, StoreUncheckedUpdateWithoutMissionsInput>
    create: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutMissionsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutMissionsInput, StoreUncheckedUpdateWithoutMissionsInput>
  }

  export type StoreUpdateWithoutMissionsInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    local?: LocalUpdateOneRequiredWithoutStoresNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutMissionsInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    localId?: BigIntFieldUpdateOperationsInput | bigint | number
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type MissionStateUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionStateWhereUniqueInput
    update: XOR<MissionStateUpdateWithoutMissionInput, MissionStateUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionStateCreateWithoutMissionInput, MissionStateUncheckedCreateWithoutMissionInput>
  }

  export type MissionStateUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionStateWhereUniqueInput
    data: XOR<MissionStateUpdateWithoutMissionInput, MissionStateUncheckedUpdateWithoutMissionInput>
  }

  export type MissionStateUpdateManyWithWhereWithoutMissionInput = {
    where: MissionStateScalarWhereInput
    data: XOR<MissionStateUpdateManyMutationInput, MissionStateUncheckedUpdateManyWithoutMissionInput>
  }

  export type UserCreateWithoutMissionStatesInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMissionStatesInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMissionStatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMissionStatesInput, UserUncheckedCreateWithoutMissionStatesInput>
  }

  export type MissionCreateWithoutMissionStatesInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    store: StoreCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateWithoutMissionStatesInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
    storeId: bigint | number
  }

  export type MissionCreateOrConnectWithoutMissionStatesInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutMissionStatesInput, MissionUncheckedCreateWithoutMissionStatesInput>
  }

  export type UserUpsertWithoutMissionStatesInput = {
    update: XOR<UserUpdateWithoutMissionStatesInput, UserUncheckedUpdateWithoutMissionStatesInput>
    create: XOR<UserCreateWithoutMissionStatesInput, UserUncheckedCreateWithoutMissionStatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMissionStatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMissionStatesInput, UserUncheckedUpdateWithoutMissionStatesInput>
  }

  export type UserUpdateWithoutMissionStatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMissionStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MissionUpsertWithoutMissionStatesInput = {
    update: XOR<MissionUpdateWithoutMissionStatesInput, MissionUncheckedUpdateWithoutMissionStatesInput>
    create: XOR<MissionCreateWithoutMissionStatesInput, MissionUncheckedCreateWithoutMissionStatesInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutMissionStatesInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutMissionStatesInput, MissionUncheckedUpdateWithoutMissionStatesInput>
  }

  export type MissionUpdateWithoutMissionStatesInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateWithoutMissionStatesInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserFavorCategoryCreateManyUserInput = {
    id?: number
    foodCategoryId: number
  }

  export type ReviewCreateManyUserInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    storeId: bigint | number
  }

  export type MissionStateCreateManyUserInput = {
    stateId?: bigint | number
    missionId: bigint | number
    state?: string
  }

  export type UserFavorCategoryUpdateWithoutUserInput = {
    foodCategory?: FoodCategoryUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
  }

  export type UserFavorCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutUserInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionStateUpdateWithoutUserInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
    mission?: MissionUpdateOneRequiredWithoutMissionStatesNestedInput
  }

  export type MissionStateUncheckedUpdateWithoutUserInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type MissionStateUncheckedUpdateManyWithoutUserInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavorCategoryCreateManyFoodCategoryInput = {
    id?: number
    userId: number
  }

  export type UserFavorCategoryUpdateWithoutFoodCategoryInput = {
    user?: UserUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
  }

  export type UserFavorCategoryUncheckedUpdateWithoutFoodCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyLocalInput = {
    storeId?: bigint | number
    name: string
    category: string
    startTime: string
    endTime: string
    rating?: number
  }

  export type StoreUpdateWithoutLocalInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    missions?: MissionUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutLocalInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutLocalInput = {
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyStoreInput = {
    reviewId?: bigint | number
    content: string
    img?: string | null
    countStar: string
    createdAt?: Date | string
    userId: number
  }

  export type MissionCreateManyStoreInput = {
    missionId?: bigint | number
    detail: string
    point: bigint | number
  }

  export type ReviewUpdateWithoutStoreInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStoreInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutStoreInput = {
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    countStar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionUpdateWithoutStoreInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    missionStates?: MissionStateUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutStoreInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    missionStates?: MissionStateUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutStoreInput = {
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    detail?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MissionStateCreateManyMissionInput = {
    stateId?: bigint | number
    userId: number
    state?: string
  }

  export type MissionStateUpdateWithoutMissionInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    state?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMissionStatesNestedInput
  }

  export type MissionStateUncheckedUpdateWithoutMissionInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }

  export type MissionStateUncheckedUpdateManyWithoutMissionInput = {
    stateId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}