# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "다율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "work",
#       "text": "User works as a midwife."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "dish",
#       "text": "User's go-to comfort dish is tonkotsu ramen."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "allergy",
#       "text": "User is allergic to latex."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-15",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2025-12-30",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 사물 인터넷에 대해 관심이 많아서요, 그 말이 처음 나온 | S2 잠깐만, 오늘 저녁 뭐 먹을까? | S3 아, 죄송해요. 다시 말씀드리면, 그 단어가 처음 나온 해가  | S4 아니요, 감사합니다.

     0.00s  user  발화 시작: 요즘 사물 인터넷에 대해 관심이 많아서요, 그 말이 처음 나온 게 언제인지 궁금해요.
     5.85s  <ret> 발화 (turn1 첫 프레임)
     6.08s  agent 발화 시작: <ret> 사물 인터넷이라는 용어는 천구백구십구년에 프로크터 앤 갬블에서 일하시던 케빈 애쉬턴 님이 처음 사
     6.26s  user  발화 끝
     7.23s  ⚡SPAN 주입 [d'=1.38s / d_lead=7.55s]: The term “Internet of Things” was coined by Kevin Ashton in 1999 while
    11.47s  user  발화 시작: 그렇죠.
    12.29s  user  발화 끝
    13.62s  agent 발화 끝
    14.30s  user  발화 시작: 잠깐만, 오늘 저녁 뭐 먹을까?
    16.88s  user  발화 시작: 아, 죄송해요. 다시 말씀드리면, 그 단어가 처음 나온 해가 천구백구십구년이라고 하셨죠?
    17.16s  user  발화 끝
    23.32s  user  발화 끝
    23.33s  agent 발화 시작: 네, 맞아요. 천구백구십구년에 케빈 애쉬턴 님이 프로크터 앤 갬블에서 일하면서 처음 사용하셨답니다.
    30.49s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요?
    30.65s  agent 발화 끝
    32.61s  agent 발화 끝
    32.86s  user  발화 시작: 아니요, 감사합니다.
    34.38s  user  발화 끝
