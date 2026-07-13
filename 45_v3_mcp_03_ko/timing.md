# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "준영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 휴스턴까지 버스 티켓 좀 알아봐 줘. 사월 십일에 아침 아홉시 사십오분쯤 출발하는 걸로.
     5.93s  <ret> 발화 (turn1 첫 프레임)
     6.39s  agent 발화 시작: <ret> 달라스에서 휴스턴까지 사월 십일 아침 아홉시 사십오분 출발하는 버스 티켓을 찾았어요. 가격은 육십
     6.39s  user  발화 끝
     6.68s  ⚡SPAN 주입 [d'=0.76s / d_lead=12.79s]: (tool result) {"ticket id": "BT78923", "departure city": "Dallas", "ar
    19.18s  user  발화 시작: 오, 다행이다. 그럼 바로 예약해 줘.
    19.18s  agent 발화 끝
    21.64s  <ret> 발화 (turn3 첫 프레임)
    22.13s  agent 발화 시작: <ret> 네, 예약이 완료되었습니다. 티켓 번호는 비 티 칠 팔 구 이 삼입니다. 즐거운 여행 되세요!
    22.13s  user  발화 끝
    22.92s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.38s]: (tool result) {"ticket id": "BT78923", "status": "confirmed"}
    29.51s  user  발화 시작: 고마워. 휴스턴에 괜찮은 레스토랑도 좀 알아봐 줄래?
    29.51s  agent 발화 끝
    32.96s  agent 발화 시작: 어떤 종류의 음식을 좋아하세요?
    32.96s  user  발화 끝
    34.92s  agent 발화 끝
