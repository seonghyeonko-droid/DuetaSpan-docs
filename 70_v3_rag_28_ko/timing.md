# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "은경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-05-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프라이데이 나이트 라이트에서 퍼미안 고등학교는 누구랑 경기했어?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.09s  agent 발화 시작: <ret> 프라이데이 나이트 라이트에서 묘사된 챔피언십 경기에서, 퍼미안 고등학교는 댈러스 카터 카우보이스와
     0.09s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: The Permian High School Panthers played the Dallas Carter Cowboys in t
     0.09s  user  발화 끝
     0.25s  user  발화 시작: 응응.
     0.25s  agent 발화 끝
     0.27s  user  발화 시작: 잠깐만, 댈러스 카터 카우보이스라고? 그게 진짜 맞아? 뭔가 이상한데.
     0.27s  user  발화 끝
     0.30s  <ret> 발화 (turn4 첫 프레임)
     0.38s  agent 발화 시작: <ret> 천구백팔십팔년에 댈러스 카터 고등학교 축구팀은 텍사스 오 에이 주 챔피언십에서 우승하며 전국적인 
     0.38s  ⚡SPAN 주입 [d'=0.29s / d_lead=0.29s]: Dallas Carter High School's football team gained national attention in
     0.38s  user  발화 끝
     0.67s  user  발화 시작: 아, 맞아. 그 책에서 봤던 것 같아. 지금 날씨는 어때?
     0.67s  agent 발화 끝
     0.72s  <ret> 발화 (turn6 첫 프레임)
     0.80s  agent 발화 시작: <ret> 현재 기온은 섭씨 이십육 점 일도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터입니다.
     0.80s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Current conditions: 26.1°C, humidity 68%, wind 3.2 km/h.
     0.80s  user  발화 끝
     1.00s  agent 발화 끝
