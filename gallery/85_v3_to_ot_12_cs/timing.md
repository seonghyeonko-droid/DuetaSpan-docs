# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Victor",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 17 Pine Court."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-31",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 어, 머라이어 캐리 “We Belong Together” 누가 썼어?
     2.87s  <ret> 발화 (turn1 첫 프레임)
     3.10s  user  발화 끝
     3.18s  agent 발화 시작: <ret> 좋은 노래에 관심 가져주셔서 기뻐요. Johntá Austin이 머라이어 캐리랑 Shannon S
     3.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.13s]: Johntá Austin co-wrote “We Belong Together” with Mariah Carey and Shan
    12.31s  agent 발화 끝
    12.32s  user  발화 시작: 오, 진짜? 머라이어 혼자 쓴 줄 알았어.
    15.63s  agent 발화 시작: 혼자 쓴 거라고 생각하기 쉬울 수도 있어요—
    15.65s  user  발화 끝
    17.55s  user  발화 시작: …그 사람이 다른 유명한 노래도 썼어?
    18.36s  agent 발화 끝
    19.37s  <ret> 발화 (turn5 첫 프레임)
    19.76s  agent 발화 시작: <ret> Johntá Austin은 작곡가이자 레코드 프로듀서인데, Aaliyah, Mary J. Blig
    19.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.09s]: (tool result) Johntá Austin is an American songwriter and record produ
    19.85s  user  발화 끝
    23.61s  user  발화 시작: 어.
    24.32s  user  발화 끝
    28.68s  agent 발화 시작: 정말 인상적인 커리어를 가지고 계시네요. 다른 작품들도 찾아볼까요?
    28.85s  agent 발화 끝
    33.91s  agent 발화 끝
