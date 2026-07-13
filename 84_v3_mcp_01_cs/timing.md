# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Marie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "home",
#       "text": "User's home address is 504 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 위도 삼십이 점 영삼 삼삼 삼, 경도 백십팔 점 칠팔팔팔인 곳이 어디야?
     5.71s  agent 발화 시작: 네.
     5.71s  user  발화 끝
     6.17s  <ret> 발화 (turn2 첫 프레임)
     6.18s  agent 발화 시작: <ret> 거기는 캘리포니아주 샌디에이고, 유니버시티 애비뉴 이이공팔에 있어. 우편번호는 구이일공사야. 캘리
     6.18s  agent 발화 끝
     6.47s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.66s]: (tool result) {"address": "2208 University Ave, San Diego, CA 92104", 
    12.84s  user  발화 시작: 어.
    12.84s  agent 발화 끝
    13.32s  user  발화 시작: 그 근처에 괜찮은 커피숍 있어?
    13.32s  user  발화 끝
    15.63s  <ret> 발화 (turn6 첫 프레임)
    15.69s  agent 발화 시작: 아.
    15.69s  user  발화 끝
    16.17s  agent 발화 시작: <ret> 리빙 브루 커피가 이 점 육 마일 떨어져 있는데, 엘 카혼 불러바드 이이이일 번지에 있고, 평점은
    16.17s  agent 발화 끝
    16.76s  ⚡SPAN 주입 [d'=1.14s / d_lead=10.94s]: {"name": "Living Brew Coffee", "address": "2121 El Cajon Blvd Ste 109,
    27.11s  user  발화 시작: 좋아, 그럼 그 커피숍까지 걸어가는 길 찾아 줘.
    27.11s  agent 발화 끝
    30.90s  <ret> 발화 (turn9 첫 프레임)
    30.91s  agent 발화 시작: 예.
    30.91s  user  발화 끝
    31.20s  ⚡SPAN 주입 [d'=0.30s / d_lead=11.89s]: (tool result) {"distance": 0.6, "duration": 12, "instructions": Walk w
    31.39s  agent 발화 시작: <ret> 이 점 육 마일 걸어가면, 대략 십이 분 걸릴 거야. 유니버시티 애비뉴를 서쪽으로 걸어가서 길먼 
    31.39s  agent 발화 끝
    43.28s  agent 발화 끝
