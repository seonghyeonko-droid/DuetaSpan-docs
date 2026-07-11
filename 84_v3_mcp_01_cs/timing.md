# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Oscar",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-27",
#       "category": "home",
#       "text": "User's home address is 365 Cedar Lane."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 설정 파일 업데이트해야 하는데, 테마는 다크, 폰트 크기는 십이, 언어는 en으로 덮어 써 줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.14s  agent 발화 시작: <ret> 어, 설정 파일 그렇게 바꿔 놨어. 테마는 다크로, 폰트 크기는 십이, 언어는 영어로.
     0.14s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) File 'config/settings' overwritten successfully.
     0.14s  user  발화 끝
     0.27s  <ret> 발화 (turn4 첫 프레임)
     0.27s  user  발화 시작: 예.
     0.27s  agent 발화 끝
     0.28s  user  발화 시작: 음, 괜찮은 것 같은데. 혹시 'profile' 파일에는 지금 뭐가 들어 있는지 확인해 줄 수 있어?
     0.28s  user  발화 끝
     0.43s  agent 발화 시작: <ret> 아냐. 프로필 파일에는 네 이름이 아냐 페트로바, 나이는 스물여덟 살, 그리고 사는 곳은 서울로 
     0.43s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) Anya Petrova\28\Seoul
     0.43s  user  발화 끝
     0.48s  <ret> 발화 (turn8 첫 프레임)
     0.58s  user  발화 시작: 음.
     0.58s  agent 발화 끝
     0.59s  agent 발화 시작: 서울에 사는 거 보니까 기분 좋네—정말 멋진 도시잖아! 친구로서 네 프로필을 최신으로 유지하는 건 좋은 방법
     0.59s  user  발화 끝
     0.76s  user  발화 시작: …사실, 그 프로필 파일에서 내 나이를 스물아홉 살로 바꿔 줄 수 있을까?
     0.76s  agent 발화 끝
     0.88s  agent 발화 시작: <ret> 나이 스물아홉 살로 바꿔 놨어. 그 작은 변화가 네게 잘 맞길 바라!
     0.88s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) File 'profile' overwritten successfully.
     0.88s  user  발화 끝
     1.00s  agent 발화 끝
