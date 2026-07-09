# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 해산물— 아니, 잠깐만, 혹시 오페라 하우스 투어도 예약해 줄 | S3 투어 시간이랑 가격이 어떻게 돼? | S4 고마워. 그럼 근처 해산물 레스토랑은?

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> 잠시만요, 확인해 볼게요— 시드니 오페라 하우스는 위도 마이너스 삼십삼 점 팔오육팔, 경도 백오십
     3.60s  user  발화 끝
     5.05s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.68s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
     8.59s  user  발화 시작: 응.
     8.89s  user  발화 끝
    13.03s  agent 발화 끝
    13.13s  user  발화 시작: 음, 그건 알겠는데, 근처에 괜찮은 레스토랑도 찾아줄 수 있어?
    18.13s  user  발화 끝
    18.44s  agent 발화 시작: 물론이죠. 어떤 종류의 음식을 선호하시나요?
    21.49s  agent 발화 끝
    22.80s  user  발화 시작: 해산물— 아니, 잠깐만, 혹시 오페라 하우스 투어도 예약해 줄 수 있어?
    29.04s  user  발화 끝
    29.29s  agent 발화 시작: 오페라 하우스 투어는—
    30.30s  user  발화 시작: 투어 시간이랑 가격이 어떻게 돼?
    30.89s  agent 발화 끝
    32.23s  <ret> 발화 (turn8 첫 프레임)
    32.62s  agent 발화 시작: <ret> 투어 시간과 가격을 알려드릴게요— 다음 투어는 오전 열 시에 시작하며, 일인당 삼십오 호주 달러입
    32.88s  user  발화 끝
    33.27s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.93s]: (tool result) The next tour is at 10:00 AM, costing 35 AUD per person.
    34.97s  user  발화 시작: 와.
    35.69s  user  발화 끝
    39.27s  agent 발화 시작: 투어를 예약하시겠어요?
    39.39s  agent 발화 끝
    40.73s  agent 발화 끝
    40.83s  user  발화 시작: 응, 두 명으로 예약해 줘.
    42.65s  <ret> 발화 (turn12 첫 프레임)
    42.97s  agent 발화 시작: <ret> 네, 예약을 진행하겠습니다.
    43.14s  user  발화 끝
    44.09s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.75s]: (tool result) Reservation confirmed for 2 people at 10:00 AM, confirma
    44.72s  agent 발화 끝
    44.85s  agent 발화 시작: 두 분 투어 예약이 완료되었습니다. 확인 번호는 칠만 팔천 구백 사십육입니다.
    50.18s  agent 발화 끝
    50.61s  user  발화 시작: 고마워. 그럼 근처 해산물 레스토랑은?
    54.12s  user  발화 끝
    54.18s  agent 발화 시작: 잠시만 기다려 주세요—
    55.22s  <ret> 발화 (turn16 첫 프레임)
    55.45s  agent 발화 시작: <ret> 가장 가까운 해산물 레스토랑은 “시드니 코브 오이스터 바”이며, 거리는 영 점 오킬로미터이고 평점
    55.47s  agent 발화 끝
    57.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: (tool result) The closest seafood restaurant is “Sydney Cove Oyster Ba
    63.42s  agent 발화 끝
