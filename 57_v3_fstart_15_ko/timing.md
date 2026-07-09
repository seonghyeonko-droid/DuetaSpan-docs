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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도를 알려줘. | S2 풀먼 호텔이 제일 저렴하네. 그 호텔 예약해 줘. | S3 그 거리가 얼마나 되는지 궁금해. | S4 와, 진짜 가까운 거네. 고마워.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도를 알려줘.
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위치 정보를 찾아볼게요. 위도는 -삼십삼 점 팔 오 육 팔, 경도는 백오십
     3.56s  user  발화 끝
     4.89s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.81s]: (tool result) latitude: -33.8568, longitude: 151.2153
     8.41s  user  발화 시작: 진짜?
     9.04s  user  발화 끝
    12.88s  agent 발화 끝
    12.98s  user  발화 시작: 음, 그럼 그 근처에 괜찮은 호텔 좀 찾아줄래?
    16.30s  <ret> 발화 (turn4 첫 프레임)
    16.62s  user  발화 끝
    16.69s  agent 발화 시작: <ret> 물론이죠. 시드니 오페라 하우스 근처 호텔을 검색해 드릴게요. 파크 하얏트 시드니, 샹그릴라 호텔
    18.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) hotels: [Park Hyatt Sydney (price: 650 AUD), Shangri-La 
    27.16s  user  발화 시작: 어어.
    27.89s  user  발화 끝
    32.98s  user  발화 시작: 풀먼 호텔이 제일 저렴하네. 그 호텔 예약해 줘.
    32.98s  agent 발화 끝
    36.63s  <ret> 발화 (turn7 첫 프레임)
    37.02s  agent 발화 시작: <ret> 풀먼 키 그랜드 시드니 하버 호텔 예약 진행하겠습니다. 풀먼 키 그랜드 시드니 하버 호텔이 내일 
    37.14s  user  발화 끝
    38.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.70s]: (tool result) booking_id: 789456, confirmation_number: ABC123XYZ, tota
    41.36s  user  발화 시작: 응.
    41.85s  user  발화 끝
    51.07s  user  발화 시작: 혹시 호텔에서 오페라 하우스까지 걸어갈 수 있어?
    51.13s  agent 발화 끝
    54.38s  agent 발화 시작: 오페라 하우스까지 걸어서—
    54.63s  user  발화 끝
    55.39s  user  발화 시작: 그 거리가 얼마나 되는지 궁금해.
    55.99s  agent 발화 끝
    57.82s  agent 발화 시작: 오페라 하우스까지 도보 거리는 약 이십분 정도입니다.
    57.93s  user  발화 끝
    58.89s  user  발화 시작: 와.
    59.62s  user  발화 끝
    61.06s  agent 발화 끝
    61.08s  agent 발화 시작: 풀먼 호텔에서 오페라 하우스까지는 걸어서 이십분 정도 걸리고, 택시로는 약 십분 정도 소요됩니다.
    67.94s  agent 발화 끝
    68.94s  user  발화 시작: 그럼 호텔에서 가장 가까운 기차역은 어디야?
    72.00s  <ret> 발화 (turn16 첫 프레임)
    72.15s  agent 발화 시작: <ret> 가장 가까운 기차역을 찾아볼게요. 가장 가까운 기차역은 서큘러 키 역이고, 호텔에서 오백미터 거리
    72.40s  user  발화 끝
    72.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.93s]: (tool result) nearest_station: Circular Quay Station (distance: 500m)
    78.91s  agent 발화 끝
    79.35s  user  발화 시작: 와, 진짜 가까운 거네. 고마워.
    82.17s  user  발화 끝
    82.27s  agent 발화 시작: 천만에요. 즐거운 여행 되시길 바랍니다.
    84.85s  agent 발화 끝
