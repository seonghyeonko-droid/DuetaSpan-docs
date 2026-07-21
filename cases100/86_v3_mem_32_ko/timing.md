# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "주완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "emergency",
#       "text": "User's emergency contact is Yuna."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "dish",
#       "text": "User's go-to comfort dish is cold buckwheat noodles."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "skill",
#       "text": "User is getting fairly good at salsa dancing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-05-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 주완님. 저는 핼입니다. 목표 설정과 실천을 도와드리는 에이전트예요.
     3.16s  user  발화 시작: 응.
     3.79s  user  발화 끝
     5.79s  agent 발화 끝
     6.00s  user  발화 시작: 어, 안녕하세요. 혹시 제가 전에 말씀드렸던 거 기억하세요?
     8.04s  agent 발화 시작: 네.
     8.53s  agent 발화 끝
    10.80s  <ret> 발화 (turn4 첫 프레임)
    11.16s  agent 발화 시작: <ret> 네, 기억합니다. 주완님께서 시내에서 반려동물과 함께 살 수 있는, 구십만 원 이하의 보증금에 주
    11.23s  user  발화 끝
    11.35s  ⚡SPAN 주입 [d'=0.55s / d_lead=10.30s]: [2026-06-03] Apartment hunting downtown: wanted a pet-friendly buildin
    21.46s  agent 발화 끝
    21.71s  user  발화 시작: 맞아요, 그거. 혹시 지금 부산에 그런 곳이 있을까요?
    25.05s  agent 발화 시작: 부산에는 그런 조건에 맞는 아파트가 몇 군데 있습니다.
    25.32s  user  발화 끝
    26.89s  user  발화 시작: 음.
    27.34s  user  발화 끝
    28.30s  agent 발화 시작: 지금 확인해 보면요—
    28.37s  agent 발화 끝
    28.96s  user  발화 시작: …혹시 해운대 쪽으로 좀 알아봐 주실 수 있을까요?
    29.77s  agent 발화 끝
    31.75s  <ret> 발화 (turn10 첫 프레임)
    32.15s  agent 발화 시작: <ret> 해운대 팰리체가 보증금 팔십오만 원이고, 해운대 푸르지오가 팔십팔만 원입니다. 두 곳 모두 반려동
    32.20s  user  발화 끝
    32.76s  ⚡SPAN 주입 [d'=1.02s / d_lead=9.83s]: (tool result) {"results": [{"name": "해운대 팰리체", "address": "부산 해운대구 해운대
    41.98s  agent 발화 끝
