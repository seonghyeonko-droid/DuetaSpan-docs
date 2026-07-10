# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "라완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-09-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼요? | S2 베넬롱에 예약 좀 해 줘. 이번 주 토요일 저녁 일곱시에 두  | S3 … 혹시 실내 좌석으로 예약해 줄 수 있어? 베넬롱에. | S4 아니, 괜찮아.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼요?
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.41s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 남위 삼십삼 점 팔 오 육 팔도, 경도는 동경 백오십일 점 이 일 
     3.65s  user  발화 끝
     5.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.54s]: (tool result) 33.8568° S, 151.2153° E
     9.35s  user  발화 시작: 진짜?
    10.13s  user  발화 끝
    14.79s  user  발화 시작: 음… 근처에 괜찮은 레스토랑 있으면 찾아봐 줘.
    14.95s  agent 발화 끝
    15.98s  user  발화 시작: 와.
    16.61s  user  발화 끝
    18.02s  <ret> 발화 (turn5 첫 프레임)
    18.36s  user  발화 끝
    18.42s  agent 발화 시작: <ret> 아리아 레스토랑은 백오십미터, 베넬롱은 이백미터, 퀘이는 삼백미터 떨어져 있습니다. 분위기나 메뉴
    20.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) Aria Restaurant (150m), Bennelong (200m), Quay (300m)
    23.68s  user  발화 시작: 어어.
    24.50s  user  발화 끝
    26.72s  user  발화 시작: 베넬롱에 예약 좀 해 줘. 이번 주 토요일 저녁 일곱시에 두 명.
    26.81s  agent 발화 끝
    30.83s  <ret> 발화 (turn8 첫 프레임)
    31.15s  agent 발화 시작: <ret> 베넬롱에 이번 주 토요일, 칠월 십이일 저녁 일곱시에 두 분으로 예약이 완료되었습니다. 확인 코드
    31.22s  user  발화 끝
    32.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) Bennelong, Saturday, July 12, 2026 at 7:00 PM, 2 guests,
    33.68s  user  발화 시작: 응.
    34.08s  user  발화 끝
    39.58s  agent 발화 끝
    40.71s  user  발화 시작: 토요일 날씨는 어때?
    42.39s  <ret> 발화 (turn11 첫 프레임)
    42.47s  user  발화 끝
    42.63s  agent 발화 시작: <ret> 시드니의 토요일 날씨는 섭씨 이십이도, 습도는 육십팔퍼센트, 풍속은 시속 칠 점 이킬로미터로 예상
    44.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: (tool result) 22.0°C, humidity 68%, wind 7.2 km/h
    48.92s  user  발화 시작: … 혹시 실내 좌석으로 예약해 줄 수 있어? 베넬롱에.
    49.67s  agent 발화 끝
    52.12s  <ret> 발화 (turn13 첫 프레임)
    52.28s  agent 발화 시작: <ret> 베넬롱에 실내 좌석으로 예약이 변경되었고, 확인 코드는 구a1b8c입니다.
    52.44s  user  발화 끝
    54.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: (tool result) Bennelong, Saturday, July 12, 2026 at 7:00 PM, 2 guests,
    58.02s  agent 발화 끝
    59.24s  user  발화 시작: 고마워.
    60.01s  agent 발화 시작: 천만에요. 혹시 토요일에 시드니 오페라 하우스에서 공연하는 행사도 알아봐 드릴까요?
    60.20s  user  발화 끝
    65.36s  user  발화 시작: 아니, 괜찮아.
    65.48s  agent 발화 끝
    66.45s  user  발화 끝
    66.61s  agent 발화 시작: 네, 알겠습니다. 혹시 다른 계획은 없으신가요?
    67.66s  user  발화 시작: 응.
    68.16s  user  발화 끝
    69.42s  agent 발화 끝
    70.68s  user  발화 시작: 없어.
    71.34s  agent 발화 시작: 네, 알겠습니다. 즐거운 여행 되세요.
    71.50s  user  발화 끝
    73.92s  agent 발화 끝
