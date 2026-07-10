# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "주율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시, 재미있게 볼 수 있는 코미디 드라마 영화 좀 찾아줄 수 있어? 그레타 거윅 감독이고, 시얼샤 로넌이 
     8.11s  <ret> 발화 (turn1 첫 프레임)
     8.43s  agent 발화 시작: <ret> 그레타 거윅 감독에 시얼샤 로넌이 출연하는 코미디 드라마 영화로는 '레디 오어 낫', '작은 아씨
     8.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) "Lady Bird (2017) - Comedy, Drama, Romance, Coming-of-ag
     8.67s  user  발화 끝
    11.73s  user  발화 시작: 그렇죠.
    12.22s  user  발화 끝
    15.61s  agent 발화 끝
    15.70s  agent 발화 시작: 세 작품 모두 평이 아주 좋답니다. 혹시 다른 배우나 장르를 더 선호하시나요?
    21.30s  agent 발화 끝
    21.64s  user  발화 시작: 아니, 괜찮아. '레디 오어 낫'에 대해 좀 더 자세히 알려줄 수 있을까?
    25.94s  <ret> 발화 (turn5 첫 프레임)
    26.34s  agent 발화 시작: <ret> '레디 오어 낫'은 캘리포니아 새크라멘토에서 고등학교를 다니는 소녀의 성장기를 그린 영화예요. 시
    26.34s  ⚡SPAN 주입 [d'=1.60s / d_lead=13.73s]: Lady Bird (2017) - A high school senior navigates the complexities of 
    26.49s  user  발화 끝
    36.11s  user  발화 시작: 네.
    36.84s  user  발화 끝
    40.07s  agent 발화 끝
    40.59s  user  발화 시작: 아, 그렇구나. 어디에서 상영하는지 알아봐 줄 수 있어?
    45.07s  user  발화 끝
