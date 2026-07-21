# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "예정",
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
#       "date": "2026-06-13",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "skill",
#       "text": "User is quite experienced with pottery."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into trail running."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "anniversary",
#       "text": "User's anniversary is December 11."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-02",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 벨라지오 호텔, 라스베이거스… | S2 …칠월 십팔일부터 사박 예약 좀 해줘. | S3 비 엑스 팔 사 구 제이가 뭐지? 복잡하네. | S4 그 호텔 주변에 괜찮은 식당 좀 찾아줘.

     0.00s  user  발화 시작: 벨라지오 호텔, 라스베이거스…
     3.32s  user  발화 끝
     4.91s  user  발화 시작: …칠월 십팔일부터 사박 예약 좀 해줘.
     6.84s  <ret> 발화 (turn2 첫 프레임)
     7.17s  user  발화 끝
     7.19s  agent 발화 시작: <ret> 벨라지오 호텔, 라스베이거스, 이천이십육년 칠월 십팔일부터 사박 예약이 완료되었어요. 확인 번호는
     8.06s  ⚡SPAN 주입 [d'=1.22s / d_lead=9.23s]: (tool result) {"hotel name": "Bellagio", "city": "Las Vegas", "check i
    14.20s  user  발화 시작: 응응.
    14.97s  user  발화 끝
    16.41s  agent 발화 끝
    17.71s  user  발화 시작: 비 엑스 팔 사 구 제이가 뭐지? 복잡하네.
    20.25s  agent 발화 시작: 확인 번호는 예약 확인을 위해 필요할 수 있습니다. 간단하게 비 엑스 팔 사 구 제이라고 기억해 두시면 됩니
    20.29s  user  발화 끝
    27.38s  agent 발화 끝
    27.55s  user  발화 시작: 그 호텔 주변에 괜찮은 식당 좀 찾아줘.
    29.72s  <ret> 발화 (turn7 첫 프레임)
    30.18s  agent 발화 시작: <ret> 벨라지오 호텔 근처에는 메이페어 슈퍼 클럽이라는 식당이 있어요. 라이브 공연을 보면서 현대 미국 
    30.27s  user  발화 끝
    30.32s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.44s]: (tool result) "The Mayfair Supper Club at Bellagio offers a sophistica
    38.61s  agent 발화 끝
