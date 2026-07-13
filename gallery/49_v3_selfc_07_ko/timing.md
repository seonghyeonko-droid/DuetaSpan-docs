# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "혜우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일 저녁에 분위기 좋은 레스토랑 예약 좀 해 줘. | S2 발우곤장… 거긴 어떤 음식들이 있어? | S3 … 그럼, 분위기는 좋은데 고기를 먹을 수 있는 곳은 없을까? | S4 확인 번호는 다시 한번 말해 줄래?

     0.00s  user  발화 시작: 이번 주 토요일 저녁에 분위기 좋은 레스토랑 예약 좀 해 줘.
     5.00s  <ret> 발화 (turn1 첫 프레임)
     5.40s  agent 발화 시작: <ret> 토요일 저녁에 분위기 좋은 곳을 찾으신다면, 신라 호텔의 라연이라는 한정식집을 추천드려요. 멋진 
     5.40s  user  발화 끝
     6.28s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.80s]: (tool result) There are many restaurants with good ambiance in Seoul, 
    16.20s  user  발화 시작: 라연… 가격대는 어느 정도야?
    16.20s  agent 발화 끝
    17.92s  <ret> 발화 (turn3 첫 프레임)
    18.17s  agent 발화 시작: <ret> 라연은 고급 레스토랑이라 일인당 십오만 원에서 삼십만 원 정도, 음료랑 서비스 요금은 별도예요.
    18.17s  user  발화 끝
    18.22s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.38s]: (tool result) La Yeon is considered a high-end dining experience, with
    24.55s  user  발화 시작: 오.
    24.55s  agent 발화 끝
    25.04s  user  발화 시작: 생각보다 비싸네. 좀 더 저렴한 곳으로 찾아봐 줘.
    25.04s  user  발화 끝
    28.90s  <ret> 발화 (turn6 첫 프레임)
    28.97s  agent 발화 시작: <ret> 조금 더 저렴한 곳으로는 종로에 있는 발우곤장을 추천드려요. 사찰 음식인데 분위기도 좋고 일인당 
    28.97s  user  발화 끝
    29.50s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.84s]: (tool result) For a moderate price range, Balwoo Gonjang in Jongno off
    37.81s  user  발화 시작: 발우곤장… 거긴 어떤 음식들이 있어?
    37.81s  agent 발화 끝
    39.98s  <ret> 발화 (turn8 첫 프레임)
    40.27s  agent 발화 시작: <ret> 발우곤장은 전통적인 사찰 음식을 전문으로 하는데, 제철 채소랑 곡물, 야생 허브를 사용해서 고기나
    40.27s  user  발화 끝
    40.72s  ⚡SPAN 주입 [d'=0.74s / d_lead=10.80s]: Balwoo Gonjang specializes in traditional Korean temple cuisine, featu
    51.07s  user  발화 시작: 어.
    51.07s  agent 발화 끝
    51.56s  user  발화 시작: 음… 채식은 잘 안 먹는데.
    51.56s  user  발화 끝
    54.02s  agent 발화 시작: 채식을 잘 안 드신다고요? —
    54.02s  user  발화 끝
    56.47s  user  발화 시작: … 그럼, 분위기는 좋은데 고기를 먹을 수 있는 곳은 없을까?
    56.47s  agent 발화 끝
    61.32s  <ret> 발화 (turn13 첫 프레임)
    61.38s  agent 발화 시작: <ret> 분위기는 좋고 고기를 먹을 수 있는 곳으로는 성수동의 본앤브레드를 추천드려요. 드라이 에이징 스테
    61.38s  user  발화 끝
    62.00s  ⚡SPAN 주입 [d'=0.68s / d_lead=10.80s]: (tool result) For a good ambiance with meat options, Born & Bred in Se
    72.18s  user  발화 시작: 응.
    72.18s  agent 발화 끝
    72.67s  agent 발화 시작: 본앤브레드는 특히 특별한 날에 방문하기 좋은 곳으로 알려져 있어요. 기념일이나 데이트 장소로도 인기가 많거든
    72.67s  user  발화 끝
    79.55s  user  발화 시작: 기념일… 내 생일이 다음 달인데, 미리 예약해 둘까?
    79.55s  agent 발화 끝
    83.48s  agent 발화 시작: 네.
    83.48s  user  발화 끝
    83.94s  <ret> 발화 (turn18 첫 프레임)
    83.97s  agent 발화 시작: <ret> 네, 생일이 다음 달이시군요. 본앤브레드에 이천이십육년 팔월 삼일 저녁 일곱시에 예약을 완료했습니
    83.97s  agent 발화 끝
    84.40s  ⚡SPAN 주입 [d'=0.46s / d_lead=9.82s]: (tool result) Reservation confirmed at Born & Bred for August 3, 2026 
    93.79s  user  발화 시작: 확인 번호는 다시 한번 말해 줄래?
    93.79s  agent 발화 끝
    96.74s  agent 발화 시작: 확인 번호는 칠 팔 엑스 구 이 피입니다.
    96.74s  user  발화 끝
   100.66s  user  발화 시작: 고마워, 도라나. 덕분에 생일 저녁 메뉴는 정했네.
   100.66s  agent 발화 끝
   104.10s  agent 발화 시작: 생일 저녁 메뉴를 정하신 걸 보니 저도 기쁘네요.
   104.10s  user  발화 끝
   108.03s  agent 발화 끝
