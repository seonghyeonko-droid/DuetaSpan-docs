# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "소온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-17",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 케빈 리 선생님이랑 일월 이십일 오후 한시 삼십분에 예약하고  | S2 이번 주 토요일에 마사지… | S3 …예약도 하고 싶은데, 괜찮을까요? | S4 네, 그렇게 해주세요.

     0.00s  user  발화 시작: 케빈 리 선생님이랑 일월 이십일 오후 한시 삼십분에 예약하고 싶어요.
     4.57s  <ret> 발화 (turn1 첫 프레임)
     4.81s  agent 발화 시작: <ret> 케빈 리 선생님과의 예약이 일월 이십일 오후 한시 삼십분으로 확정되었습니다. 확인 번호는 팔 이 
     4.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.66s]: (tool result) Appointment with Kevin Lee confirmed for January 20 at 1
     4.81s  user  발화 끝
    13.48s  user  발화 시작: 아, 네.
    13.48s  agent 발화 끝
    14.44s  agent 발화 시작: 혹시 다른 예약이 필요하시면 말씀해 주세요. 제가 도와드릴 수 있습니다.
    14.44s  user  발화 끝
    19.25s  user  발화 시작: 응.
    19.25s  agent 발화 끝
    19.74s  user  발화 시작: 이번 주 토요일에 마사지…
    19.74s  user  발화 끝
    21.66s  user  발화 시작: …예약도 하고 싶은데, 괜찮을까요?
    21.66s  user  발화 끝
    23.35s  <ret> 발화 (turn7 첫 프레임)
    23.59s  agent 발화 시작: <ret> 죄송하지만, 이번 주 토요일은 예약이 마감되었습니다. 일요일 오전 열시에 예약 가능합니다.
    23.59s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.30s]: No appointments available on Saturday, July 11, 2026. Earliest availab
    23.59s  user  발화 끝
    28.88s  user  발화 시작: 응응.
    28.88s  agent 발화 끝
    29.36s  user  발화 시작: …아니요, 그럼 그냥 다음 주 월요일로 할게요.
    29.36s  user  발화 끝
    32.49s  <ret> 발화 (turn10 첫 프레임)
    32.73s  agent 발화 시작: <ret> 다음 주 월요일 오후 두시에 예약 가능합니다. 괜찮으시면 예약 진행해 드릴까요?
    32.73s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.30s]: Monday, July 20, 2026 at 2:00 PM is available.
    32.73s  user  발화 끝
    38.03s  user  발화 시작: 네, 그렇게 해주세요.
    38.03s  agent 발화 끝
    39.47s  agent 발화 시작: 네, 다음 주 월요일 오후 두시로 마사지 예약을 완료했습니다. 즐거운 시간 보내세요.
    39.47s  user  발화 끝
    45.25s  agent 발화 끝
