# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "정서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네, 안녕하세요. 전에 이야기했던 베트남 여행 계획이 기 | S2 해변도 좋고, 맛있는 음식도 많다고 들었어요. | S3 미케 해변… 이름이 예쁘네요. 혹시 그곳 근처에 괜찮은 호텔  | S4 네, 부탁드려요.

     0.00s  agent 발화 시작: 안녕하세요, 정서님! 저는 여러분의 창의적인 고민과 자신감을 돕는 쿠나입니다.
     4.98s  user  발화 시작: 아, 네, 안녕하세요. 전에 이야기했던 베트남 여행 계획이 기억나세요?
     4.98s  agent 발화 끝
     9.93s  <ret> 발화 (turn2 첫 프레임)
     9.96s  agent 발화 시작: <ret> 네, 팔월에 베트남 여행을 계획하고 계신다는 걸 기억하고 있어요. 혹시 특별히 가고 싶은 곳이 있
     9.96s  user  발화 끝
    10.23s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.30s]: [2026-01-12] User is planning a trip to Vietnam in August.
    18.26s  user  발화 시작: 와.
    18.26s  agent 발화 끝
    18.81s  user  발화 시작: 음… 다낭에 가보고 싶어요.
    18.81s  user  발화 끝
    21.02s  agent 발화 시작: 다낭은 정말 아름다운 곳이죠. [curious] 다낭의 어떤 점이 가장 끌리시나요?
    21.02s  user  발화 끝
    26.56s  user  발화 시작: 음.
    26.56s  agent 발화 끝
    27.11s  user  발화 시작: 해변도 좋고, 맛있는 음식도 많다고 들었어요.
    27.11s  user  발화 끝
    30.43s  agent 발화 시작: 해변과 음식이라… 정말 좋은 선택이세요! [happy] 다낭 해변은 정말 아름답고, 베트남 음식은 세계적으로
    30.43s  user  발화 끝
    38.17s  user  발화 시작: 예.
    38.17s  agent 발화 끝
    38.73s  agent 발화 시작: 다낭의 미케 해변은 길이가 삼십육킬로미터나 되는 아름다운 해변으로, 다양한 해양 액티비티를 즐길 수 있습니다
    38.73s  user  발화 끝
    49.79s  user  발화 시작: 미케 해변… 이름이 예쁘네요. 혹시 그곳 근처에 괜찮은 호텔 있을까요?
    49.79s  agent 발화 끝
    55.30s  <ret> 발화 (turn12 첫 프레임)
    55.33s  agent 발화 시작: <ret> 다낭에는 훌륭한 호텔들이 많지만, 하얏트 리젠시 다낭 리조트 앤 스파는 평점 사 점 육점에 일박에
    55.33s  user  발화 끝
    56.26s  ⚡SPAN 주입 [d'=0.96s / d_lead=11.62s]: (tool result) {"hotel name": "Hyatt Regency Danang Resort & Spa", "add
    66.94s  user  발화 시작: 백팔십달러면… 조금 비싼 편이네요.
    66.94s  agent 발화 끝
    69.16s  agent 발화 시작: [sigh] 조금 가격대가 있는 편이긴 하네요. 좀 더 저렴한 호텔을 찾아볼까요?
    69.16s  user  발화 끝
    75.24s  user  발화 시작: 네, 부탁드려요.
    75.24s  agent 발화 끝
    76.35s  user  발화 끝
