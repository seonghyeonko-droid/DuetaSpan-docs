# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "유완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 김민지 씨 연락처 알 수 있을까요? | S2 아, 그렇군요. 그럼 오늘 서울 날씨는 어때요? | S3 네, 더울 것 같아요. 이번 주 토요일에 영화 볼 만한 거 있 | S4 아니요, 인사이드 아웃 이 괜찮아요.

     0.00s  user  발화 시작: 혹시 김민지 씨 연락처 알 수 있을까요?
     1.78s  <ret> 발화 (turn1 첫 프레임)
     2.17s  agent 발화 시작: <ret> 죄송합니다. 김민지 님의 연락처는 찾을 수 없었습니다. 개인 정보 보호 때문에 제가 도와드릴 수 
     2.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.73s]: (no information found)
     2.26s  user  발화 끝
     9.85s  user  발화 시작: 아, 그렇군요. 그럼 오늘 서울 날씨는 어때요?
     9.91s  agent 발화 끝
    12.21s  <ret> 발화 (turn3 첫 프레임)
    12.43s  user  발화 끝
    12.44s  agent 발화 시작: <ret> 서울 날씨는 현재 기온이 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다.
    12.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    19.63s  agent 발화 시작: 오늘 하루도 꽤 덥겠네요.
    19.86s  agent 발화 끝
    21.37s  agent 발화 끝
    21.49s  user  발화 시작: 네, 더울 것 같아요. 이번 주 토요일에 영화 볼 만한 거 있을까요?
    24.41s  <ret> 발화 (turn6 첫 프레임)
    24.65s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십이일에는 CGV 강남에서 '인사이드 아웃 이'가 열시, 열세시, 열여섯시
    24.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) '인사이드 아웃 2' - 10:00, 13:00, 16:00, 19:00, CGV 강남
    24.72s  user  발화 끝
    31.99s  agent 발화 시작: 혹시 다른 영화 장르를 선호하시나요?
    32.06s  agent 발화 끝
    34.76s  agent 발화 끝
    34.87s  user  발화 시작: 아니요, 인사이드 아웃 이 괜찮아요.
    36.71s  user  발화 끝
    36.76s  agent 발화 시작: 다행이네요. 좋은 영화 관람되시길 바랍니다.
    39.72s  agent 발화 끝
