# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "윤온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "anniversary",
#       "text": "User's anniversary is July 9."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "dish",
#       "text": "User's go-to comfort dish is beef tacos."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅맥이 언제 처음 나왔는지 궁금해. | S2 음… 버거킹이 언제 생겼는지 알고 싶어. | S3 그럼, 요즘 제일 인기 있는 햄버거는 뭐야? | S4 치즈버거… 맛있겠다.

     0.00s  user  발화 시작: 빅맥이 언제 처음 나왔는지 궁금해.
     2.35s  user  발화 끝
     2.44s  <ret> 발화 (turn1 첫 프레임)
     2.47s  agent 발화 시작: <ret> 빅맥의 탄생 시기를 여쭤보셨네요. 천구백육십칠년에 펜실베이니아주 유니온타운의 맥도날드에서 처음 판
     3.63s  ⚡SPAN 주입 [d'=1.19s / d_lead=11.50s]: The Big Mac was first sold in 1967 at a McDonald's restaurant in Union
    13.80s  <ret> 발화 (turn2 첫 프레임)
    13.97s  agent 발화 끝
    13.99s  agent 발화 시작: <ret> 요즘은 비트코인 가격도 많이 오르던데, 그렇죠?
    14.64s  ⚡SPAN 주입(IRRELEVANT) [d'=0.84s / d_lead=4.02s]: The current price of Bitcoin is $67,345.23 as of July 10, 2026.
    18.01s  agent 발화 끝
    19.19s  user  발화 시작: 아, 그렇군요. 맥도날드 말고 다른 햄버거 가게도 궁금해.
    23.73s  user  발화 끝
    23.93s  agent 발화 시작: 맥도날드 외 다른 햄버거 가게도 찾으시는군요. 혹시 특별히 생각하시는 곳이 있으신가요?
    27.24s  user  발화 시작: 응.
    27.55s  user  발화 끝
    31.62s  agent 발화 끝
    31.75s  user  발화 시작: 음… 버거킹이 언제 생겼는지 알고 싶어.
    34.70s  <ret> 발화 (turn7 첫 프레임)
    35.21s  agent 발화 시작: <ret> 원래 '인스타-버거킹'이라는 이름으로 천구백오십삼년 플로리다주 잭슨빌에서 시작되었답니다.
    35.31s  user  발화 끝
    35.82s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.64s]: Burger King was founded in 1953 in Jacksonville, Florida, originally c
    42.85s  agent 발화 끝
    42.85s  user  발화 시작: 천구백오십삼년이라니, 엄청 오래됐네!
    46.22s  user  발화 끝
    46.33s  agent 발화 시작: [surprised] 정말 오래되었죠? 맥도날드보다 훨씬 더 오래되었네요.
    49.88s  user  발화 시작: 응응.
    50.46s  user  발화 끝
    52.12s  agent 발화 끝
    52.51s  user  발화 시작: 그럼, 요즘 제일 인기 있는 햄버거는 뭐야?
    55.59s  user  발화 끝
    55.96s  agent 발화 시작: 요즘 가장 인기 있는 햄버거를 찾으시는군요. 어떤 종류의 햄버거를 좋아하시나요?
    58.50s  user  발화 시작: 응응.
    59.09s  user  발화 끝
    62.73s  agent 발화 끝
    63.05s  user  발화 시작: 그냥, 다들 많이 먹는 거.
    65.32s  <ret> 발화 (turn15 첫 프레임)
    65.38s  agent 발화 시작: <ret> [happy] 많은 분들이 가장 좋아하는 햄버거는 바로 클래식 치즈버거라고 하네요.
    65.39s  user  발화 끝
    66.77s  ⚡SPAN 주입 [d'=1.46s / d_lead=5.74s]: According to recent surveys, the most popular burger in the United Sta
    71.12s  agent 발화 끝
    73.19s  user  발화 시작: 치즈버거… 맛있겠다.
    75.53s  user  발화 끝
    75.73s  agent 발화 시작: 네, 정말 맛있겠네요.
    78.38s  agent 발화 끝
    79.41s  user  발화 시작: 아니, 괜찮아. 그냥 궁금해서 물어봤어. 고마워.
    83.98s  user  발화 끝
    84.40s  agent 발화 시작: [happy] 궁금증을 해결해 드렸다니 기쁘네요.
    87.72s  agent 발화 끝
