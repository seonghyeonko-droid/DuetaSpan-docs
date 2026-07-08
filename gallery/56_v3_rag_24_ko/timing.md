# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 듀 플레시 가족에 대해 읽다가 성의 유래가 궁금해졌어요.
     3.11s  agent 발화 시작: 정말 흥미로운 질문이시네요. 성은 이야기를 담고 있는 경우가 많잖아요.
     3.28s  user  발화 끝
     7.32s  <ret> 발화 (turn2 첫 프레임)
     7.40s  agent 발화 시작: <ret> 가문의 성을 살펴보는 건 정말 재미있는 연구예요— 듀 플레시 성은 프랑스에서 유래했는데, ‘플레시
     7.45s  agent 발화 끝
     9.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: The surname Du Plessis is of French origin, meaning “of Plessis”, refe
    17.28s  agent 발화 끝
    18.85s  user  발화 시작: 프랑스에 그 이름의 장소가 많이 있나요?
    21.40s  agent 발화 시작: 네, 여러 곳이 있어요. 장소 이름은 종종 매우 자세하게 묘사되어 있거든요.
    21.44s  user  발화 끝
    26.05s  <ret> 발화 (turn5 첫 프레임)
    26.37s  agent 발화 시작: <ret> 성의 유래를 찾는 일은 종종— 플레시는 고대 프랑스어에서 유래한 프랑스 지명으로, 작은 개간지나 
    26.40s  agent 발화 끝
    28.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.10s]: Plessis is a common place name in France, derived from the Old French 
    34.04s  user  발화 시작: 그렇다면 원래 귀족 가문은 아니었던 건가요?
    34.06s  agent 발화 끝
    37.41s  user  발화 끝
    37.66s  agent 발화 시작: 꼭 그렇지는 않아요. 지명은 모든 사회 계층에서 사용되었거든요.
    41.40s  <ret> 발화 (turn8 첫 프레임)
    41.49s  agent 발화 끝
    41.56s  agent 발화 시작: <ret> 종종 가문은 그들이 소유한 땅에서 성을 따왔는데— 듀 플레시 가문은 11세기에 프랑스 노르망디에서
    42.84s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.27s]: The Du Plessis family first rose to prominence in Normandy, France, in
    50.09s  agent 발화 끝
    50.32s  user  발화 시작: 그 성이 남아프리카 공화국으로 퍼진 건 언제인가요?
    53.87s  agent 발화 시작: 그건 좀 더 최근의 일이고, 식민지 역사와 관련이 있어요.
    54.03s  user  발화 끝
    57.67s  <ret> 발화 (turn11 첫 프레임)
    57.89s  agent 발화 끝
    57.99s  agent 발화 시작: <ret> 이주 패턴을 추적하는 것은 이해하는 데 필수적입니다— 듀 플레시 성은 17세기 후반 프랑스 위그노
    58.87s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.59s]: The Du Plessis surname was brought to South Africa by French Huguenots
    67.22s  agent 발화 끝
    67.35s  user  발화 시작: 위그노들은 종교적 박해를 피해 도망친 개신교 신자들이 아니었나요?
    71.69s  user  발화 끝
    71.90s  agent 발화 시작: 맞아요. 그들은 남아프리카 공화국을 포함한 많은 나라에서 피난처를 찾았습니다.
    76.44s  <ret> 발화 (turn14 첫 프레임)
    76.59s  agent 발화 시작: <ret> 종교적 자유는 종종 중요한— 위그노는 종교적 박해로 인해 남아프리카 공화국을 포함하여 이주한 프랑
    76.62s  agent 발화 끝
    78.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.34s]: Huguenots were French Protestants who, due to religious persecution, e
    84.90s  user  발화 시작: 아, 성이 종교적 난민과 관련이 있군요. 정말 대단한 역사네요!
    84.93s  agent 발화 끝
    89.15s  user  발화 끝
    89.38s  agent 발화 시작: 그렇지 않나요? 성은 과거의 메아리 같아요.
    91.54s  <ret> 발화 (turn17 첫 프레임)
    91.85s  agent 발화 시작: <ret> 이주에 대한 더 넓은 맥락을 고려하면— 듀 플레시 성은 아프리카너스 성에서 28번째로 흔한 성입니
    91.88s  agent 발화 끝
    92.82s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.45s]: In Afrikaans, the surname Du Plessis is among the most common, ranking
    98.75s  agent 발화 끝
    98.83s  user  발화 시작: 놀랍네요! 오늘날 프랑스에서도 흔한가요?
   102.07s  user  발화 끝
   102.23s  agent 발화 시작: 실제로 남아프리카 공화국보다 프랑스에서는 덜 흔합니다.
   105.76s  <ret> 발화 (turn20 첫 프레임)
   106.07s  agent 발화 끝
   106.08s  agent 발화 시작: <ret> 인구 분포의 변화는 종종— 듀 플레시 성은 프랑스보다 남아프리카 공화국과 이전 네덜란드 식민지에서
   107.04s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.97s]: While still present in France, the Du Plessis surname is more frequent
   113.93s  user  발화 시작: 위그노의 이주를 고려하면 이해가 되네요. 정말 흥미롭습니다.
   114.00s  agent 발화 끝
   117.73s  agent 발화 시작: 정말 그렇습니다. 사람들의 이동은 언어적, 문화적 지형을 형성합니다. [happy]
   117.76s  user  발화 끝
   122.59s  agent 발화 끝
   123.36s  user  발화 시작: 그 성과 관련된 문장이 있는지 궁금합니다.
   126.04s  agent 발화 시작: 실제로 여러 개가 있는데, 가문의 다른 지파를 반영합니다.
   126.08s  user  발화 끝
   129.70s  <ret> 발화 (turn25 첫 프레임)
   130.01s  agent 발화 끝
   130.02s  agent 발화 시작: <ret> 문장은 가문의— 듀 플레시 가문은 프랑스의 혈통과 지역에 따라 여러 개의 문장을 가지고 있습니다.
   131.30s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.64s]: The Du Plessis family has several coats of arms, varying based on line
   136.18s  agent 발화 끝
   136.67s  user  발화 시작: 오, 단일 디자인이 아니라는 건가요?
   138.93s  user  발화 끝
   139.15s  agent 발화 시작: 아니요, 전혀 그렇지 않아요. 디자인은 수세기에 걸쳐 다양해졌습니다.
   143.22s  agent 발화 끝
