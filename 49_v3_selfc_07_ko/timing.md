# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "성재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 베를린 시내 공원 찾아줘. | S2 응, 맞아. 이번 주 토요일에 맛있는 이탈리아 식당 예약해 줘 | S3 라 스텔라, 저녁 일곱시에 두 명으로 예약해 줘. | S4 경복궁… 가본 적은 없어.

     0.00s  user  발화 시작: 베를린 시내 공원 찾아줘.
     1.75s  <ret> 발화 (turn1 첫 프레임)
     1.99s  agent 발화 시작: <ret> 베를린 중심부에 있는 티어가르텐 공원을 찾았어요. 면적이 이백십 헥타르에 달하고, 다양한 경관과 
     1.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.46s]: (tool result) Tiergarten is a large urban park in central Berlin, cove
     1.99s  user  발화 끝
    10.45s  user  발화 시작: 헥타르는 뭐 얼마나 돼?
    10.45s  agent 발화 끝
    12.20s  <ret> 발화 (turn3 첫 프레임)
    12.44s  agent 발화 시작: <ret> 헥타르는 제곱미터 일만 평방미터, 혹은 에이커 이 점 사 칠과 같아요.
    12.44s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.47s]: A hectare is a unit of area equal to 10,000 square meters or 2.471 acr
    12.44s  user  발화 끝
    17.92s  user  발화 시작: 에이커는 또 뭐야?
    17.92s  agent 발화 끝
    19.17s  <ret> 발화 (turn5 첫 프레임)
    19.41s  agent 발화 시작: <ret> 에이커는 제곱미터 사천사십칠 평방미터, 혹은 제곱피트 사만 삼천오백육십과 같아요.
    19.41s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.48s]: An acre is a unit of land area equal to 4,047 square meters or 43,560 
    19.41s  user  발화 끝
    23.89s  user  발화 시작: 오.
    23.89s  agent 발화 끝
    24.39s  user  발화 시작: 음… 좀 복잡하네.
    24.39s  user  발화 끝
    25.88s  agent 발화 시작: 공원 크기를 가늠하기가 좀 어려우셨죠?
    25.88s  user  발화 끝
    28.37s  user  발화 시작: 응, 맞아. 이번 주 토요일에 맛있는 이탈리아 식당 예약해 줘.
    28.37s  agent 발화 끝
    33.35s  agent 발화 시작: 이번 주 토요일 이탈리아 식당 예약 도와드릴게요. 혹시 특별히 선호하는 지역이 있으세요?
    33.35s  user  발화 끝
    39.32s  user  발화 시작: 글쎄… 강남역 근처로.
    39.32s  agent 발화 끝
    40.65s  <ret> 발화 (turn12 첫 프레임)
    40.81s  agent 발화 시작: <ret> 강남역 근처에 있는 이탈리아 식당 라 스텔라를 찾았어요. 주소는 서울 강남구 일 삼 삼 일 공번지
    40.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.92s]: (tool result) {"restaurant name": "La Stella", "address": "133-10 Gang
    40.81s  user  발화 끝
    57.74s  user  발화 시작: 달러 두 개는 얼마야?
    57.74s  agent 발화 끝
    59.49s  <ret> 발화 (turn14 첫 프레임)
    59.73s  agent 발화 시작: <ret> 현재 환율은 미국 달러 일달러당 한국 원 천삼백원이에요.
    59.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: The current exchange rate is 1 US dollar equals 1,300 South Korean won
    59.73s  user  발화 끝
    63.71s  user  발화 시작: 진짜요?
    63.71s  agent 발화 끝
    64.21s  user  발화 시작: 아하, 그럼 이천육백원 정도 되는구나.
    64.21s  user  발화 끝
    66.69s  agent 발화 시작: 맞아요.
    66.69s  user  발화 끝
    67.19s  user  발화 시작: 라 스텔라, 저녁 일곱시에 두 명으로 예약해 줘.
    67.19s  agent 발화 끝
    71.01s  <ret> 발화 (turn19 첫 프레임)
    71.17s  agent 발화 시작: <ret> 라 스텔라에 저녁 일곱시에 두 명으로 예약 완료되었습니다. 확인 번호는 알 에스 칠 팔 구 공 일
    71.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.96s]: (tool result) {"confirmation number": "RS789012"}
    71.17s  user  발화 끝
    80.13s  user  발화 시작: 알 에스 칠 팔 구 공 일 이… 알았어.
    80.13s  agent 발화 끝
    84.61s  agent 발화 시작: 예약 확인 문자를 보내드릴까요?
    84.61s  user  발화 끝
    86.60s  user  발화 시작: 응, 보내줘.
    86.60s  agent 발화 끝
    87.20s  <ret> 발화 (turn23 첫 프레임)
    87.60s  agent 발화 시작: <ret> 예약 확인 문자를 발송했습니다.
    87.60s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.99s]: (tool result) {"status": "success"}
    87.60s  user  발화 끝
    89.59s  user  발화 시작: 네.
    89.59s  agent 발화 끝
    90.09s  agent 발화 시작: 혹시 다른 계획은 없으세요?
    90.09s  user  발화 끝
    92.08s  user  발화 시작: 음… 이번 주말에 갈 만한 곳 추천해 줄래?
    92.08s  agent 발화 끝
    95.90s  <ret> 발화 (turn27 첫 프레임)
    96.06s  agent 발화 시작: <ret> 경복궁은 서울의 다섯대 궁궐 중 가장 큰 곳으로, 천삼백구십오년에 지어졌어요. 조선 시대 건축의 
    96.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.96s]: (tool result) Gyeongbokgung Palace is the largest of Seoul's Five Gran
    96.06s  user  발화 끝
   104.02s  user  발화 시작: 정말요?
   104.02s  agent 발화 끝
   104.52s  user  발화 시작: 경복궁… 가본 적은 없어.
   104.52s  user  발화 끝
   106.51s  agent 발화 시작: 경복궁은 역사와 아름다움을 동시에 느낄 수 있는 곳이에요.
   106.51s  user  발화 끝
   110.49s  user  발화 시작: 네.
   110.49s  agent 발화 끝
   110.99s  user  발화 시작: 좋아, 그럼 경복궁까지 가는 대중교통 어떻게 타?
   110.99s  user  발화 끝
   114.08s  <ret> 발화 (turn33 첫 프레임)
   114.48s  agent 발화 시작: <ret> 강남역에서 이호선을 타고 시청역까지 가세요. 그리고 일호선으로 환승해서 종로 삼가역에서 내리세요.
   114.48s  ⚡SPAN 주입 [d'=1.12s / d_lead=8.46s]: (tool result) Take subway line 2 from Gangnam Station to City Hall Sta
   114.48s  user  발화 끝
   122.94s  user  발화 시작: 그렇군요.
   122.94s  agent 발화 끝
   123.43s  user  발화 시작: 알았어. 고마워, 루나.
   123.43s  user  발화 끝
   124.93s  agent 발화 시작: 천만에요.
   124.93s  user  발화 끝
   125.43s  agent 발화 끝
