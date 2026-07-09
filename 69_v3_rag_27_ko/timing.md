# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Kim · Location: Paris, France · Nationality: French · Gender: non-binary · Age: early 20s · TZ: Europe/Paris (CET, UTC+1) · Currency: EUR (€)
#   B. 저장 메모리:
#      [2026-07-25] User's favorite cuisine is Italian.
#      [2026-06-05] User is into rock climbing.
#      [2026-04-20] User is allergic to shellfish.
#      [2026-04-19] User's home address is 411 Maple Drive.
#      [2026-02-28] User is vegetarian.
#      [2026-01-23] User works as a architect.
#   B. 과거 대화 요약:
#      [2026-07-17] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 Lux Aurunque에 대해 좀 알아보고 싶은데, 정보가 너 | S2 음, 정확히 언제 태어났는지 알고 싶어요. 년도가 필요해요. | S3 일천구백칠십 년… 생각보다 훨씬 빠르네요. | S4 그런데 왕이나 그런 사람이었어요? 그런 이야기가 있더라고요—

     0.00s  user  발화 시작: Lux Aurunque에 대해 좀 알아보고 싶은데, 정보가 너무 많아서 헷갈려요.
     5.06s  agent 발화 시작: 새로운 주제에 압도당하는 건 당연해, 기본부터 시작하자.
     5.19s  user  발화 끝
     7.35s  user  발화 시작: 네.
     7.98s  user  발화 끝
     9.00s  user  발화 시작: 음, 정확히 언제 태어났는지 알고 싶어요. 년도가 필요해요.
     9.36s  agent 발화 끝
    13.20s  <ret> 발화 (turn4 첫 프레임)
    13.21s  user  발화 끝
    13.35s  agent 발화 시작: <ret> 좋은 질문이야— 일천구백칠십 년에 태어났어.
    14.48s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.61s]: Lux Aurunque was born in nineteen seventy.
    15.22s  user  발화 시작: 음.
    15.72s  user  발화 끝
    16.95s  user  발화 시작: 일천구백칠십 년… 생각보다 훨씬 빠르네요.
    16.96s  agent 발화 끝
    20.96s  agent 발화 시작: 역사적인 인물이 언제 살았는지 헷갈릴 때가 있잖아—
    20.97s  user  발화 끝
    24.18s  <ret> 발화 (turn8 첫 프레임)
    24.33s  agent 발화 시작: <ret> 청동 조각을 만드는 데 중요한 역할을 했어.
    24.52s  agent 발화 끝
    25.22s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.14s]: Lux Aurunque was a prominent figure in the creation of the bronze scul
    25.88s  user  발화 시작: 예.
    26.24s  user  발화 끝
    27.47s  agent 발화 끝
    27.95s  user  발화 시작: 그런데 왕이나 그런 사람이었어요? 그런 이야기가 있더라고요—
    32.63s  <ret> 발화 (turn11 첫 프레임)
    32.86s  agent 발화 시작: <ret> 좋은 질문이고, 많은 사람들이 헷갈려 하는 부분이야.
    32.90s  user  발화 끝
    34.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: Lux Aurunque was a nobleman and served as a trade representative for t
    36.34s  agent 발화 시작: 그는 그 지역의 무역 대표를 맡았어.
    36.56s  agent 발화 끝
    39.05s  agent 발화 끝
