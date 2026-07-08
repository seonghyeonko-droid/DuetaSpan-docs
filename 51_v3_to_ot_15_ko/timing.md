# v3_to_ot_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 그러니까, 남아메리카에 있는 영어를 쓰는 나라는 어디인가요?
     4.53s  agent 발화 시작: 네, 가이아나죠. 음악적으로는 좀 간과되는 보석 같은 곳이에요.
     4.53s  user  발화 끝
     9.06s  user  발화 시작: 가이아나… 그렇군요. 수도는 어디인가요?
     9.06s  agent 발화 끝
    11.32s  agent 발화 시작: <ret> 음, 조지타운이 수도예요. 대서양 연안, 데메라라 강이 바다와 만나는 곳에 있죠. 꽤 습하고 아름
    11.32s  <ret> 발화 (turn3 첫 프레임)
    11.32s  user  발화 끝
    11.48s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.13s]: Georgetown is the capital of Guyana, located on the Atlantic coast at 
    19.81s  user  발화 시작: 흠. 인구는요? 대략적으로라도요?
    19.81s  agent 발화 끝
    21.51s  agent 발화 시작: <ret> 뭐, 80만 명 정도예요. 2023년 추정치로는 80만 8천 7백 26명이에요. 엄청 큰 도시는 
    21.51s  <ret> 발화 (turn5 첫 프레임)
    21.51s  user  발화 끝
    22.47s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.26s]: As of 2023, Guyana’s population is estimated to be 808,726, making it 
    29.44s  user  발화 시작: 그렇군요… 별로 많지 않네요, 그렇죠? [sigh] 브라질 같은 곳과 비교하면요.
    29.44s  agent 발화 끝
    35.10s  agent 발화 시작: 네, 그렇지 않아요. 하지만 크기가 전부가 아니잖아요. 작은 콤보도 빅밴드만큼 신나게 연주할 수 있어요.
    35.10s  user  발화 끝
    43.02s  user  발화 시작: 맞아요. 그곳의 화폐는 뭐예요?
    43.02s  agent 발화 끝
    45.29s  agent 발화 시작: <ret> 가이아나 달러예요. 2023년 11월 21일 기준으로 1달러에 약 208.20 가이아나 달러예요.
    45.29s  <ret> 발화 (turn9 첫 프레임)
    45.29s  user  발화 끝
    46.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.70s]: The official currency of Guyana is the Guyanese dollar, with the symbo
    53.78s  user  발화 시작: 알겠습니다. 지도를 찾아봐야겠어요…
    53.78s  agent 발화 끝
    55.48s  user  발화 시작: 저기, 재활용 쓰레기는 내놓으셨어요?
    55.48s  user  발화 끝
    57.74s  user  발화 시작: 미안해요. 좋아요, 다시 가이아나로 돌아가서. 주요 산업은 뭐예요?
    57.74s  user  발화 끝
    62.27s  agent 발화 시작: 역사적으로는 설탕이었죠. 하지만 요즘은 석유가 점점 중요한 역할을 하고 있어요.
    62.27s  user  발화 끝
    67.93s  user  발화 시작: 석유요? 흥미롭네요. 영어 외에 어떤 언어가 사용되나요?
    67.93s  agent 발화 끝
    71.89s  agent 발화 시작: <ret> 사실 여러 언어가 사용돼요. 주민들은 가이아나 크레올어, 카리브 해 힌두스타니어, 그리고 다양한 
    71.89s  <ret> 발화 (turn15 첫 프레임)
    71.89s  user  발화 끝
    72.45s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.13s]: The official language of Guyana is English, but many residents also sp
    84.35s  user  발화 시작: 와, 정말 다양한데요. 카리브해에 속해 있나요?
    84.35s  agent 발화 끝
    87.74s  agent 발화 시작: 지리적으로는 그렇습니다. 카리브해 지역의 일부로 간주돼요. 문화적으로는 카리브해, 남아메리카, 심지어 북미의
    87.74s  user  발화 끝
    96.23s  user  발화 시작: 그 말이 맞네요. 여행하기 안전한 곳인가요?
    96.23s  agent 발화 끝
    99.63s  agent 발화 시작: 일반적으로는 그렇지만, 어디든 주변을 잘 살피는 것이 중요해요. 특히 조지타운에서는 소매치기 같은 경범죄가 
    99.63s  user  발화 끝
   108.69s  user  발화 시작: 알겠습니다. 좋아요. 음, 기후는 어떤가요?
   108.69s  agent 발화 끝
   111.52s  agent 발화 시작: <ret> 예상대로 열대성 기후예요. 기온은 21도에서 32도 사이로 꾸준하고, 특히 5월부터 8월, 그리고
   111.52s  <ret> 발화 (turn21 첫 프레임)
   111.52s  user  발화 끝
   111.60s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.13s]: Guyana has a tropical climate with consistent temperatures between 21 
   122.84s  user  발화 시작: 덥고 습하군요. 알겠습니다. 음악은요? 가이아나만의 독특한 음악 스타일이 있나요?
   122.84s  agent 발화 끝
   127.93s  agent 발화 시작: 오, 물론이죠. 칼립소의 영향이 많지만 아프리카 리듬과 토착 사운드와 섞여 있어요. 아주 활기찬 음악이에요.
   127.93s  user  발화 끝
   140.39s  user  발화 시작: 정말 멋진 것 같네요.
   140.39s  agent 발화 끝
   142.65s  agent 발화 시작: 그렇죠. 데이브 마틴스와 더 트레이드윈즈의 음악을 한번 찾아보세요. 그곳에서 꽤 인기가 많아요.
   142.65s  user  발화 끝
   149.45s  agent 발화 끝
